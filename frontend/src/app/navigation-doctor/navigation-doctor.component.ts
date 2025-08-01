import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../services/doctor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-doctor',
  templateUrl: './navigation-doctor.component.html',
  styleUrls: ['./navigation-doctor.component.css']
})
export class NavigationDoctorComponent implements OnInit {

  constructor(public router: Router, private serviceDoctor: DoctorService) {
  }

  ngOnInit(): void {
    let loggedInManager = localStorage.getItem("loggedInDoctor")
    if (loggedInManager == null)
      this.router.navigate(["/loginDoctor"])
    console.log("Doctor loged In")
  }

  logOut() {
    this.serviceDoctor.logOutDoctor()
  }
}
