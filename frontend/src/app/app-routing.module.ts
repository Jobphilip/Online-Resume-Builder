import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
},
{
  path: 'signin',
  component: SigninComponent
},
{
  path: 'adminlogin',
  component: AdminloginComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'userhome',
  component: UserhomeComponent
},
{
  path: 'selecttemplate',
  component: SelecttemplateComponent
},
{
  path: 'personalinfo',
  component: PersonalinfoComponent
},
{
  path: 'experience',
  component: ExperienceComponent
},
{
  path: 'education',
  component: EducationComponent
},
{
  path: 'skills',
  component: SkillsComponent
},
{
  path: 'download',
  component: DownloadComponent
},
{
  path: 'download2',
  component: Download2Component
},
{
  path: 'download3',
  component: Download3Component
},
{
  path: 'adminhome',
  component: AdminhomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
