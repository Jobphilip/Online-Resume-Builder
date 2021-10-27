import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginService } from './service/login.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SelecttemplateComponent } from './selecttemplate/selecttemplate.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { DownloadComponent } from './download/download.component';
import { Download2Component } from './download2/download2.component';
import { Download3Component } from './download3/download3.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { WelcomeBackgroundComponent } from './home/welcome-background/welcome-background.component';
import { WelcomeDialogComponent } from './home/welcome-dialog/welcome-dialog.component';


import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    AdminloginComponent,
    SignupComponent,
    UserhomeComponent,
    SelecttemplateComponent,
    PersonalinfoComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    DownloadComponent,
    Download2Component,
    Download3Component,
    AdminhomeComponent,
    WelcomeBackgroundComponent,
    WelcomeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule
  ],
 
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
