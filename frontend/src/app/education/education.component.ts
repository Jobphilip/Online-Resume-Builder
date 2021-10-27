import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @ViewChild('saved', { static: true })
  Saved!: ElementRef;

  educationdetails={ 
    scname:'',
    city:'',
    state:'',
    degree:'',
    study:'',
    pass:'',
    degre:''
}
educationdata={ 
    scname: String,
    city: String,
    state: String,
    degree: String,
    study: String,
    pass: String,
    degre: String
};
  

constructor(private fb : FormBuilder) { }

ngOnInit(): void {
this.educationdata = JSON.parse(localStorage.getItem('education')|| '{}');
}
educationform= this.fb.group(
{ 
  scname:['',[Validators.required]],
    city:['',[Validators.required]],
    state:['',[Validators.required]],
    degree:['',[Validators.required]],
    study:['',[Validators.required]],
    pass:['',[Validators.required]],
    degre:['',[Validators.required]]
}
);

addeducation(){
    localStorage.setItem('education',JSON.stringify(this.educationdetails));
    this.Saved.nativeElement.innerHTML="<div class=alert&#32;alert-primary&#32;col-md-3 role=alert> Saved! </div>"
}

}

