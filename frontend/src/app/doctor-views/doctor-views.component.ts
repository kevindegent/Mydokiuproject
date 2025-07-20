import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "../../model/appointment";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {AppointmentType} from "../../model/appointmentType";
import {Report} from "../../model/report";
import {ReportService} from "../services/report.service";

@Component({
    selector: 'app-doctor-views',
    templateUrl: './doctor-views.component.html',
    styleUrls: ['./doctor-views.component.css']
})
export class DoctorViewsComponent implements OnInit {

    constructor(private serviceAppointment: AppointmentService, private serviceAppointmentType: AppointmentTypeService, private reportService: ReportService) {
    }

    doctorId: string
  appointments: any[]
    appointmentsRegular: Appointment[]
    registeredAppointmentTypes: AppointmentType[]
    alert: HTMLElement;
    message: string;
    appointmentsDescendingSorted: boolean
    reportsDescendingSorted: boolean
    ngOnInit(): void {
        this.alert = document.getElementById("alert");
        this.alert.style.visibility = "hidden"
        this.message = ""
        this.doctorId = localStorage.getItem("loggedInDoctor")
        this.readAllByDoctorId(this.doctorId)
        this.readappointments(this.doctorId)
        this.appointmentsDescendingSorted = false
        this.reportsDescendingSorted = false
        this.getRegularAppointments()

    }

    toLocalDate(date: Date) {
        return new Date(date).toLocaleDateString()
    }

    toLocaleTimeString(date: Date) {
        return new Date(date).toLocaleTimeString()
    }


    cancelAppointment(appointment) {
        if (appointment.reasonForCanceling == "") {
            this.message = "Cancelled."
            this.alert.style.visibility = "visible"
            return
        }

        appointment.canceled = true

        this.serviceAppointment.update(appointment).subscribe((newAppointment: Appointment) => {
            console.log(newAppointment)
            this.ngOnInit()
        })
    }



    getAppointmentTypeName(appointmentId) {
        return this.appointments.find(appointment => appointment._id == appointmentId).appointmentType
    }


    sortAppointments() {
        this.appointmentsDescendingSorted = !this.appointmentsDescendingSorted
        if (this.appointmentsDescendingSorted)
            this.appointmentsRegular.sort((a, b) => (a.date < b.date) ? 1 : -1)
        else
            this.appointmentsRegular.sort((a, b) => (a.date > b.date) ? 1 : -1)

    }



    readappointments(doctorId) {
        this.serviceAppointmentType.readRegisteredDoctor(doctorId).subscribe((registeredAppointments: AppointmentType[]) => {
            this.registeredAppointmentTypes = registeredAppointments
        })
    }

    readAllByDoctorId(doctorId) {
        this.serviceAppointment.readByDoctorId(doctorId).subscribe((appointments: Appointment[]) => {
            this.appointments = appointments
        })
    }


    getRegularAppointments() {
        this.serviceAppointment.readByDoctorIdAndDontHaveReport(this.doctorId).subscribe((appointmentsRegular: Appointment[]) => {
            this.appointmentsRegular = appointmentsRegular
        })
    }


}
