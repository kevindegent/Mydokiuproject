import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterPatientComponent} from "./register-patient/register-patient.component";
import {DoctorProfileComponent} from "./doctor-profile/doctor-profile.component";
import {DoctorViewsComponent} from "./doctor-views/doctor-views.component";
import {PatientDoctorsComponent} from "./patient-doctors/patient-doctors.component";
import {PatientReportsComponent} from "./patient-reports/patient-reports.component";
import {DoctorAnyComponent} from "./doctor-any/doctor-any.component";
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {PatientNotificationsComponent} from "./patient-notifications/patient-notifications.component";
import {UnregisteredLoginDoctorComponent} from "./unregistered-login-doctor/unregistered-login-doctor.component";
import {UnregisteredLoginPatientComponent} from "./unregistered-login-patient/unregistered-login-patient.component";
import {UnregisteredLoginManagerComponent} from "./unregistered-login-manager/unregistered-login-manager.component";
import {ManagerRegisterDoctorComponent} from "./manager-register-doctor/manager-register-doctor.component";
import {UnregisteredAboutComponent} from "./unregistered-about/unregistered-about.component";
import {ManagerApprovePatientComponent} from "./manager-approve-patient/manager-approve-patient.component";
import {PatientDoctorProfileComponent} from "./patient-doctor-profile/patient-doctor-profile.component";
import {ManagerNotificationComponent} from "./manager-notification/manager-notification.component";

const routes: Routes = [
  {path: "", component: UnregisteredAboutComponent},
  {path: "about", component: UnregisteredAboutComponent},
  {path: "loginDoctor", component: UnregisteredLoginDoctorComponent},
  {path: "loginPatient", component: UnregisteredLoginPatientComponent},
  {path: "loginManager", component: UnregisteredLoginManagerComponent},
  {path: "registerPatient", component: RegisterPatientComponent},

  {path: "doctor", component: DoctorProfileComponent},
  {path: "doctor/profile", component: DoctorProfileComponent},
  {path: "doctor/views", component: DoctorViewsComponent},
  {path: "doctor/any", component: DoctorAnyComponent},


  {path: "patient", component: PatientProfileComponent},
  {path: "patient/profile", component: PatientProfileComponent},
  {path: "patient/doctors", component: PatientDoctorsComponent},
  {path: "patient/reports", component: PatientReportsComponent},
  {path: "patient/doctorProfile/:id", component: PatientDoctorProfileComponent},
  {path: "patient/notifications", component: PatientNotificationsComponent},

  {path: "manager", component: ManagerApprovePatientComponent},
  {path: "manager/approve", component: ManagerApprovePatientComponent},
  {path: "manager/registerDoctor", component: ManagerRegisterDoctorComponent},
  {path: "manager/notification", component: ManagerNotificationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
