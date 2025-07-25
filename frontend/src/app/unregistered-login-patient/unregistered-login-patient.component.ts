import {Component, OnInit} from '@angular/core';
import {ServiceSession} from "../services/session.service";
import {Router} from "@angular/router";
import {Patient} from "../../model/patient";

@Component({
    selector: 'app-unregistered-login-patient',
    templateUrl: './unregistered-login-patient.component.html',
    styleUrls: ['./unregistered-login-patient.component.css']
})
export class UnregisteredLoginPatientComponent implements OnInit {

    constructor(private serviceSession: ServiceSession, private router: Router) {
    }

    ngOnInit(): void {
        this.alert = document.getElementById("alert");
        this.alert.style.visibility = "hidden"
    }

    username: string;
    password: string;
    message: string;
    alert: HTMLElement;

    loginPatient() {
        if (this.username == "" || this.password == "") {
            this.message = "Data Missing."
            this.alert.style.visibility = "visible"
            return
        }
        this.serviceSession.loginPatient(this.username, this.password).subscribe((patient: Patient) => {
            if (patient != null) {
                if (patient.approved && patient.deleted == false) {
                    localStorage.setItem("loggedInPatient", patient._id)
                    this.router.navigate(["patient"]).then(r => console.log(r))
                } else {
                    this.message = "Error."
                    this.alert.style.visibility = "visible"
                    return
                }
            } else {
                this.message = "Error!";
                this.alert.style.visibility = "visible"
                return
            }
        })
    }
}
