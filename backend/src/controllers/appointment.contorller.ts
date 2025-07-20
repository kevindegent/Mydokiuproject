import express from 'express';
import AppointmentModel from '../models/appointment';
import { sendMail } from "./mailer"
import Patient  from '../models/patient';
import doctor from '../models/doctor';
export class AppointmentController {

   create = async (req: express.Request, res: express.Response) => {
      try {
        let appointment = new AppointmentModel(req.body.appointment);
        const saved = await appointment.save();
  
       
        // Find patient
        const patient = await Patient.findById(saved.patientId);
        const doctorinfo = await doctor.findById(saved.doctorId);
        console.log(doctorinfo.firstname, "Doctor info")
        if (patient && patient.mail) {
          // Prepare email content
          const subject = 'Your Appointment Confirmation';
          const html = `
            <h3>Dear ${patient.firstname},</h3>
            <p>Your appointment has been successfully created.</p>
            <p><strong>Date:</strong> ${saved.date}</p>
            <p><strong>Doctor:</strong> ${doctorinfo.firstname}</p>
            <p>Thank you for choosing our clinic!</p>
          `;
  
          // Send email
          await sendMail(patient.mail, subject, html);
        }
  
        res.json({ message: 'ok' });
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'error' });
      }
    };

    update = (req: express.Request, res: express.Response) => {
        let _id = req.body.appointment._id;
        let appointment = new AppointmentModel(req.body.appointment);
        AppointmentModel.findOneAndUpdate({'_id': _id}, {
                $set: {
                    'canceled': appointment.canceled,
                    'reasonForCanceling': appointment.reasonForCanceling,
                },
            },
            {new: true}, (err, appointment) => {
                if (err)
                    console.log(err)
                else
                    res.json(appointment)
            })
    }

    delete = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentModel.deleteOne({'_id': id}, (err, appointment) => {
            if (err)
                console.log(err)
            else
                res.json({'message': 'ok'})
        })
    }

    read = (req: express.Request, res: express.Response) => {
        let id = req.body.id;
        AppointmentModel.findOne({'_id': id}, (err, appointment) => {
            if (err)
                console.log(err)
            else
                res.json(appointment)
        })
    }
    readAll = (req: express.Request, res: express.Response) => {
        // find all appointments
        AppointmentModel.find({}, (err, appointments) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(appointments);
                }
            }
        )
    }

    readByDoctorId = (req: express.Request, res: express.Response) => {
    const doctorId = req.body.doctorId;

    AppointmentModel.aggregate([
      {
        $match: { doctorId: doctorId }
      },
      {
        $lookup: {
          from: 'patients',           // 👈 collection name in MongoDB
          localField: 'patientId',    // field in appointments
          foreignField: '_id',        // field in patients
          as: 'patientInfo'
        }
      },
      {
        $unwind: {
          path: '$patientInfo',
          preserveNullAndEmptyArrays: true // in case patient record is missing
        }
      },
      {
        $project: {
          appointmentType: 1,
          canceled: 1,
          date: 1,
          doctorId: 1,
          patientId: 1,
          reason: 1,
          reasonForCanceling: 1,
          'patientInfo.firstname': 1,
          'patientInfo.lastname': 1
        }
      }
    ]).exec((err, results) => {
      if (err) {
        console.error('Error fetching appointments:', err);
        res.status(500).json({ message: 'Error fetching appointments' });
      } else {
        res.json(results);
      }
    });
  };

    readByDoctorIdAndDontHaveReport = (req: express.Request, res: express.Response) => {
        let doctorId = req.body.doctorId
        AppointmentModel.aggregate([
            {
                $lookup: {
                    from: "reports",
                    localField: "_id",
                    foreignField: "appointmentId",
                    as: "reports"
                }
            },
            {
                $match: {
                    "doctorId": doctorId,
                    "canceled": false,
                }
            }
        ], (err, appointments) => {
            if (err)
                console.log(err)
            else
                res.json(appointments)
        })
    }

    readByPatientId = (req: express.Request, res: express.Response) => {
        let patientId = req.body.patientId;
        AppointmentModel.find({'patientId': patientId}, (err, appointments) => {
            if (err)
                console.log(err)
            else
                res.json(appointments)
        })
    }

}
