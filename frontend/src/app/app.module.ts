import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {FormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {DoctorAnyComponent} from './doctor-any/doctor-any.component';
import {DoctorViewsComponent} from './doctor-views/doctor-views.component';
import {PatientViewsComponent} from './patient-views/patient-views.component';
import {UnregisteredLoginPatientComponent} from './unregistered-login-patient/unregistered-login-patient.component';
import {UnregisteredLoginManagerComponent} from './unregistered-login-manager/unregistered-login-manager.component';
import {ManagerApprovePatientComponent} from './manager-approve-patient/manager-approve-patient.component';
import {DoctorProfileComponent} from './doctor-profile/doctor-profile.component';

import {NavigationDoctorComponent} from './navigation-doctor/navigation-doctor.component';
import {NavigationManagerComponent} from './navigation-manager/navigation-manager.component';

import {PatientNotificationsComponent} from './patient-notifications/patient-notifications.component';
import {NavigationUnregisteredComponent} from './navigation-unregistered/navigation-unregistered.component';
import {ManagerRegisterDoctorComponent} from './manager-register-doctor/manager-register-doctor.component';
import {UnregisteredLoginDoctorComponent} from './unregistered-login-doctor/unregistered-login-doctor.component';

import {PatientDoctorsComponent} from './patient-doctors/patient-doctors.component';
import {PatientReportsComponent} from './patient-reports/patient-reports.component';
import {
    PatientScheduleAppointmentComponent
} from './patient-schedule-appointment/patient-schedule-appointment.component';
import { PatientDoctorProfileComponent } from './patient-doctor-profile/patient-doctor-profile.component';
import {NavigationPatientComponent} from './navigation-patient/navigation-patient.component';

import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import {UnregisteredAboutComponent} from './unregistered-about/unregistered-about.component';
import { ManagerNotificationComponent } from './manager-notification/manager-notification.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
    declarations: [
        AppComponent,
        RegisterPatientComponent,
        DoctorProfileComponent,
        NavigationUnregisteredComponent,
        NavigationUnregisteredComponent,
        PatientNotificationsComponent,
        ManagerRegisterDoctorComponent,
        UnregisteredAboutComponent,
        NavigationPatientComponent,
        DoctorAnyComponent,
        DoctorViewsComponent,
        PatientProfileComponent,
        PatientViewsComponent,
        UnregisteredLoginDoctorComponent,
        UnregisteredLoginPatientComponent,
        UnregisteredLoginManagerComponent,
        ManagerApprovePatientComponent,
        PatientDoctorsComponent,
        PatientReportsComponent,
        PatientScheduleAppointmentComponent,
        PatientDoctorProfileComponent,
        ManagerNotificationComponent,
         NavigationDoctorComponent,
        NavigationManagerComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgOptimizedImage,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
