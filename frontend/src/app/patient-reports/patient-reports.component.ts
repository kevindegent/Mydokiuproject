import {Component, OnInit} from '@angular/core';

import {Appointment} from "../../model/appointment";
import {AppointmentService} from "../services/appointment.service";


@Component({
    selector: 'app-patient-reports',
    templateUrl: './patient-reports.component.html',
    styleUrls: ['./patient-reports.component.css']
})
export class PatientReportsComponent implements OnInit {

    constructor( private serviceAppointment: AppointmentService) {
    }

    ngOnInit(): void {
        let patientId = localStorage.getItem("loggedInPatient")

        this.getMyAppointments(patientId)
        this.reportsNonDescendingSorted = false
        this.appointmentsNonDescendingSorted = false
    }


    appointments: Appointment[]
    reportsNonDescendingSorted: boolean
    appointmentsNonDescendingSorted: boolean



    sortAppointments() {
        if (this.appointmentsNonDescendingSorted) {
            this.appointments.sort((a, b) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            })
            this.appointmentsNonDescendingSorted = false
        } else {
            this.appointments.sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            this.appointmentsNonDescendingSorted = true
        }
    }

    toLocalDate(date: Date) {
        return new Date(date).toLocaleDateString()
    }

    toLocaleTimeString(date: Date) {
        return new Date(date).toLocaleTimeString()
    }





    getMyAppointments(patientId) {
        this.serviceAppointment.readByPatientId(patientId).subscribe((appointments: Appointment[]) => {
            this.appointments = appointments
        })
    }

    cancelAppointment(appointment: Appointment) {
        appointment.canceled = !appointment.canceled
        this.serviceAppointment.update(appointment).subscribe(() => {

            this.ngOnInit()

        })
    }
}
