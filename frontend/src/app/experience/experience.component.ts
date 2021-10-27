import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('saved', { static: true })
  Saved!: ElementRef;

  experiencedetails={ 
    employer:'',
    jobtitle:'',
    city:'',
    state:'',
    startdate:'',
    enddate:'',
    video:''
}
experiencedata={ 
    employer: String,
    jobtitle: String,
    city: String,
    state: String,
    startdate: String,
    enddate: String,
    video: String
};
  

constructor(private fb : FormBuilder) { }

ngOnInit(): void {
this.experiencedata = JSON.parse(localStorage.getItem('experience')|| '{}');
}
experienceform= this.fb.group(
{ 
    employer:['',[Validators.required]],
    jobtitle:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    startdate:['',[Validators.required]],
    enddate:['',[Validators.required]],
    video:['']
}
);

addexperience(){
    localStorage.setItem('experience',JSON.stringify(this.experiencedetails));
    this.Saved.nativeElement.innerHTML="<div class=alert&#32;alert-primary&#32;col-md-3 role=alert> Saved! </div>"
   
}

}

