import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @ViewChild('saved', { static: true })
  Saved!: ElementRef;

  skilldetails={ 
    skill1:'',
    level1:'',
    skill2:'',
    level2:'',
    skill3:'',
    level3:'',
    skill4:'',
    level4:'',
    skill5:'',
    level5:''
}
skilldata={ 
    skill1: String,
    level1: String,
    skill2: String,
    level2: String,
    skill3: String,
    level3: String,
    skill4: String,
    level4: String,
    skill5: String,
    level5: String
}
  

constructor(private fb : FormBuilder) { }

ngOnInit(): void {
this.skilldata = JSON.parse(localStorage.getItem('skill')|| '{}');
}
skillform= this.fb.group(
{ 
    skill1:[''],
    level1:[''],
    skill2:[''],
    level2:[''],
    skill3:[''],
    level3:[''],
    skill4:[''],
    level4:[''],
    skill5:[''],
    level5:['']
}
);

addskill(){
    localStorage.setItem('skill',JSON.stringify(this.skilldetails));
    this.Saved.nativeElement.innerHTML="<div class=alert&#32;alert-primary&#32;col-md-3 role=alert> Saved! </div>"
}
}
