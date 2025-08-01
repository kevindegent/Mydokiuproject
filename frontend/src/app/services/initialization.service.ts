import {Injectable} from '@angular/core';
import {DoctorService} from "./doctor.service";
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "./specialization.service";
import {AppointmentTypeService} from "./appointmentType.service";
import {PatientService} from "./patient.service";
import {ManagerService} from "./manager.service";
import {AppointmentService} from "./appointment.service";
import {ReportService} from "./report.service";
import {Doctor} from "../../model/doctor";
import {Notification} from "../../model/notification";
import {AppointmentType} from "../../model/appointmentType";
import {Patient} from "../../model/patient";
import {Appointment} from "../../model/appointment";
import {Manager} from "../../model/manager";
import {NotificationService} from "./notification.service";
import {Report} from "../../model/report";

@Injectable({
    providedIn: 'root'
})
export class InitializationService {

    constructor(
        private doctorService: DoctorService,
        private specializationService: SpecializationService,
        private appointmentTypeService: AppointmentTypeService,
        private patientService: PatientService,
        private managerService: ManagerService,
        private appointmentService: AppointmentService,
        private reportService: ReportService,
        private notificationService: NotificationService,
    ) {
    }

    init() {
        let defaultImage = "data:image/jpeg;base64,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"

        //  ============= Specialization ==================
        let specialization1 = new Specialization("Opthamology");
        let specialization2 = new Specialization("Cardiology");
        let specialization3 = new Specialization("Radiology");
        let specialization4 = new Specialization("Pediatriation");
        let specialization5 = new Specialization("Critical Surgery");
        let specialization6 = new Specialization("Neurology");
        let specialization7 = new Specialization("Anesthesiology");

        this.specializationService.create(specialization1).subscribe(() => {
        })
        this.specializationService.create(specialization2).subscribe(() => {
        })
        this.specializationService.create(specialization3).subscribe(() => {
        })
        this.specializationService.create(specialization4).subscribe(() => {
        })
        this.specializationService.create(specialization5).subscribe(() => {
        })
        this.specializationService.create(specialization6).subscribe(() => {
        })
        this.specializationService.create(specialization7).subscribe(() => {
        })

        //  ============= AppointmentType ==================
       let appointmentType1 = new AppointmentType(
  "Heart Ultrasound (Echocardiography)",
  "Echocardiography",
  "(heart ultrasound) – an examination used to assess the appearance of the heart, its size, the condition of the heart muscle, changes in heart valves, width of the aorta, and presence of fluid in the pericardium. It provides a wealth of information about both the appearance and function of the heart. It is an extremely important examination and should be done at least once a year.",
  specialization1._id,
  ["doctorDR1", "doctorDR2"],
  4000,
  true
)

let appointmentType2 = new AppointmentType(
  "Neck Ultrasound",
  "Neck Ultrasound",
  "(thyroid gland, salivary glands, lymph nodes, blood vessels of the neck) is used to assess the condition of these organs and blood vessels. It is recommended for patients with health issues as well as for healthy individuals for routine checkups.",
  specialization2._id,
  ["doctorDR2", "doctorDR3"],
  7000,
  true
)

let appointmentType3 = new AppointmentType(
  "Abdominal Ultrasound",
  "Abdominal Ultrasound",
  "(liver, gallbladder, pancreas, spleen, kidneys, adrenal glands, bladder, prostate, uterus, ovaries, lymph nodes, aorta, abdominal blood vessels) is used to assess the condition of these organs and blood vessels. It is recommended for patients with health issues as well as for healthy individuals for routine checkups.",
  specialization3._id,
  ["doctorDR3"],
  9000,
  true
)

let appointmentType4 = new AppointmentType(
  "Carotid Ultrasound",
  "Carotid Ultrasound",
  "(neck, head, arms, legs, renal arteries, liver blood vessels, aorta) is used to assess the condition of blood vessels, i.e., their width, presence of narrowing, presence of plaque, and condition of the vessel wall. It is recommended for patients with health issues as well as for healthy individuals for routine checkups.",
  specialization4._id,
  ["doctorDR4", "doctorDR5"],
  7000,
  true
)

let appointmentType5 = new AppointmentType(
  "Thyroid Ultrasound",
  "Thyroid Ultrasound",
  "(neck, head, arms, legs, renal arteries, liver blood vessels, aorta) is used to assess the condition of blood vessels, i.e., their width, presence of narrowing, presence of plaque, and condition of the vessel wall. It is recommended for patients with health issues as well as for healthy individuals for routine checkups.",
  specialization5._id,
  ["doctorDR1", "doctorDR5"],
  3000,
  true
)

let appointmentType6 = new AppointmentType(
  "Brain Ultrasound",
  "Brain Ultrasound",
  "(neck, head, arms, legs, renal arteries, liver blood vessels, aorta) is used to assess the condition of blood vessels, i.e., their width, presence of narrowing, presence of plaque, and condition of the vessel wall. It is recommended for patients with health issues as well as for healthy individuals for routine checkups.",
  specialization6._id,
  ["doctorDR4"],
  15000,
  false
)

let appointmentType7 = new AppointmentType(
  "Hand Ultrasound",
  "Hand Ultrasound",
  "(neck, head, arms, legs, renal arteries, liver blood vessels, aorta) is used to assess the condition of blood vessels, i.e., their width, presence of narrowing, presence of plaque, and condition of the vessel wall. It is recommended for patients with health issues as well as for healthy individuals for routine checkups.",
  specialization7._id,
  ["doctorDR5"],
  12000,
  false
)


        this.appointmentTypeService.create(appointmentType1).subscribe(() => {
        })
        this.appointmentTypeService.create(appointmentType2).subscribe(() => {
        })
        this.appointmentTypeService.create(appointmentType3).subscribe(() => {
        })
        this.appointmentTypeService.create(appointmentType4).subscribe(() => {
        })
        this.appointmentTypeService.create(appointmentType5).subscribe(() => {
        })
        this.appointmentTypeService.create(appointmentType6).subscribe(() => {
        })
        this.appointmentTypeService.create(appointmentType7).subscribe(() => {
        })


        //  ============= Patients ==================
        let patient1 = new Patient("Jelica", "Cincović", "patient1", "Patienzr1$", true, "Rankeova 16, Novi Sad", "123456", "patient1@gmail.com", defaultImage)
        let patient2 = new Patient("Aleksandar", "Vasilić", "patient2", "Patienzr2$", true, "Rankeova 16, Novi Sad", "123456", "patient2@gmail.com", defaultImage)
        let patient3 = new Patient("Dragan", "Bojić", "patient3", "Patienzr3$", true, "Rankeova 16, Novi Sad", "123456", "patient3@gmail.com", defaultImage)
        let patient4 = new Patient("Adrian", "Milaković", "patient4", "Patienzr4$", false, "Rankeova 16, Novi Sad", "123456", "patient4@gmail.com", defaultImage)
        let patient5 = new Patient("Filip", "Hadžić", "patient5", "Patienzr5$", false, "Rankeova 16, Novi Sad", "123456", "patient5@gmail.com", defaultImage)

        this.patientService.create(patient1).subscribe(() => {
        })
        this.patientService.create(patient2).subscribe(() => {
        })
        this.patientService.create(patient3).subscribe(() => {
        })
        this.patientService.create(patient4).subscribe(() => {
        })
        this.patientService.create(patient5).subscribe(() => {
        })

        //  ============= Doctors ==================
        let doctor1 = new Doctor("Đoko", "Ević", "doctorDR1", "Doctrqwe1$", "0123456789", true, "Rankeova 16, Novi Sad", "doctor1@gmail.com", "0123456799", specialization1._id, specialization1._id);
        let doctor2 = new Doctor("Ivan", "Grgurović", "doctorDR2", "Doctrqwe2$", "0123456789", true, "Rankeova 16, Novi Sad", "doctor2@gmail.com", "8012345673", specialization2._id, specialization2._id);
        let doctor3 = new Doctor("Slavoljub", "Zorić", "doctorDR3", "Doctrqwe3$", "0123456789", true, "Rankeova 16, Novi Sad", "doctor3@gmail.com", "8901234567", specialization3._id, specialization3._id);
        let doctor4 = new Doctor("Anastasije", "Todorović", "doctorDR4", "Doctrqwe4$", "0123456789", true, "Rankeova 16, Novi Sad", "doctor4@gmail.com", "9901234567", specialization4._id, specialization4._id);
        let doctor5 = new Doctor("Ljuba", "Gavrilović", "doctorDR5", "Doctrqwe5$", "0123456789", true, "Rankeova 16, Novi Sad", "doctor5@gmail.com", "1101234567", specialization5._id, specialization5._id);
        let doctor6 = new Doctor("Jovan", "Ignjatović", "doctorDR6", "Doctrqwe6$", "0123456789", false, "Rankeova 16, Novi Sad", "doctor6@gmail.com", "11d01234567", specialization6._id, specialization5._id);
        let doctor7 = new Doctor("Petar", "Nikolić", "doctorDR7", "Doctrqwe7$", "0123456789", false, "Rankeova 16, Novi Sad", "doctor7@gmail.com", "11a01234567", specialization7._id, specialization5._id, true);

        this.doctorService.create(doctor1).subscribe(() => {
        })
        this.doctorService.create(doctor2).subscribe(() => {
        })
        this.doctorService.create(doctor3).subscribe(() => {
        })
        this.doctorService.create(doctor4).subscribe(() => {
        })
        this.doctorService.create(doctor5).subscribe(() => {
        })
        this.doctorService.create(doctor6).subscribe(() => {
        })
        this.doctorService.create(doctor7).subscribe(() => {
        })

        //  ============= Managers ==================
        let manager1 = new Manager("manager1", "manager1", "manager1", "manager1", "manager1", "manager1")

        this.managerService.create(manager1).subscribe(() => {
        })

        //  ============= Appointments ==================
        let appointment1 = new Appointment("1", appointmentType1._id, doctor1._id, patient1._id, "Bol u stomaku.", new Date(), false, "")
        let appointment2 = new Appointment("2", appointmentType2._id, doctor2._id, patient2._id, "Bol u ramenu.", new Date(), false, "")
        let appointment3 = new Appointment("3", appointmentType3._id, doctor3._id, patient3._id, "Bol u glavi.", new Date(), false, "")
        let appointment4 = new Appointment("4", appointmentType4._id, doctor4._id, patient1._id, "Bol u ledjima.", new Date(), false, "")
        let appointment5 = new Appointment("5", appointmentType5._id, doctor1._id, patient2._id, "Bol u nozi.", new Date(), true, "Lekar je odsutan.")

        this.appointmentService.create(appointment1).subscribe(() => {
        })
        this.appointmentService.create(appointment2).subscribe(() => {
        })
        this.appointmentService.create(appointment3).subscribe(() => {
        })
        this.appointmentService.create(appointment4).subscribe(() => {
        })
        this.appointmentService.create(appointment5).subscribe(() => {
        })

        //  ============= Report ==================
        let report1 = new Report(appointment1._id, "Izveštaj 1", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere")
        let report2 = new Report(appointment2._id, "Izveštaj 2", "velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris")
        let report3 = new Report(appointment3._id, "Izveštaj 3", "vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque")
        let report4 = new Report(appointment4._id, "Izveštaj 4", "ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus")

        this.reportService.create(report1).subscribe(() => {
        })
        this.reportService.create(report2).subscribe(() => {
        })
        this.reportService.create(report3).subscribe(() => {
        })
        this.reportService.create(report4).subscribe(() => {
        })

        //  ============= Notifications ==================

        let notification1 = new Notification("Notifikacija 1", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique", false)
        let notification2 = new Notification("Notifikacija 2", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique")
        let notification3 = new Notification("Notifikacija 3", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique")
        let notification4 = new Notification("Notifikacija 4", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique")
        let notification5 = new Notification("Notifikacija 5", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique")
        let notification6 = new Notification("Notifikacija 6", "faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique")

        this.notificationService.create(notification1).subscribe(() => {
        })
        this.notificationService.create(notification2).subscribe(() => {
        })
        this.notificationService.create(notification3).subscribe(() => {
        })
        this.notificationService.create(notification4).subscribe(() => {
        })
        this.notificationService.create(notification5).subscribe(() => {
        })
        this.notificationService.create(notification6).subscribe(() => {
        })

    }
}
