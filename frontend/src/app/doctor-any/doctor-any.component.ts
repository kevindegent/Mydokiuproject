import {Component, OnInit} from '@angular/core';
import {AppointmentType} from "../../model/appointmentType";
import {AppointmentTypeService} from "../services/appointmentType.service";
import {Specialization} from "../../model/specialization";
import {SpecializationService} from "../services/specialization.service";
import {DoctorService} from "../services/doctor.service";

@Component({
    selector: 'app-doctor-any',
    templateUrl: './doctor-any.component.html',
    styleUrls: ['./doctor-any.component.css']
})
export class DoctorAnyComponent implements OnInit {

    constructor(private serviceAppointmentType: AppointmentTypeService, private serviceSpecialization: SpecializationService, private doctorService: DoctorService) {
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert")
        this.alert.style.visibility = "hidden"
        this.alertSuccess = document.getElementById("alertSuccess")
        this.alertSuccess.style.visibility = "hidden"
        this.getSpecilizations()
        this.getAllAppointmentTypes()
        this.appointmentType = new AppointmentType("", "", "", "", [], 0, true)
    }

    appointmentType: AppointmentType
    appointmentTypes: AppointmentType[]
    message: string
    alert: HTMLElement;
    alertSuccess: HTMLElement;
    specializations: Specialization[]

 selection(spec) {
        this.appointmentType.specialization = spec
    }

    getAllAppointmentTypes() {
        this.serviceAppointmentType.readAll().subscribe((appointmentTypes: AppointmentType[]) => {
            this.appointmentTypes = appointmentTypes
        })
    }

    getSpecilizations() {
        this.serviceSpecialization.readAll().subscribe((specializations: Specialization[]) => {
            this.specializations = specializations
        })
    }

    createAppointment() {
        this.alert.style.visibility = "hidden"
        console.log(this.appointmentType)
        if (this.appointmentType.description == "" || this.appointmentType.descriptionStrong == "" || this.appointmentType.specialization == "" || this.appointmentType.price == 0) {
            this.message = "Missing fields."
            this.alert.style.visibility = "visible"
            return
        }
        // add doctorId to appointmentType.doctors
        this.appointmentType.doctors.push(localStorage.getItem("loggedInDoctor"))


        this.serviceAppointmentType.create(this.appointmentType).subscribe(() => {
            this.ngOnInit()
        })

        this.alertSuccess.style.visibility = "visible"
        this.message = "Service created succesfully."

    }




}
