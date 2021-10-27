import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {
  @ViewChild('saved', { static: true })
  Saved!: ElementRef;
  personaldetails={ 
    firstname:'',
    lastname:'',
    address:'',
    city:'',
    zipcode:'',
    state:'',
    email:'',
    phone:'',
    image:'',
    imagepath:'',
    pas:''
}
personaldata={ 
    firstname: String,
    lastname: String,
    address: String,
    city: String,
    zipcode: String,
    state: String,
    email: String,
    phone: String,
    image: String,
    pas: String
   
};
images:any

url: any = undefined;
constructor(private fb : FormBuilder) { }

ngOnInit(): void {
this.personaldata = JSON.parse(localStorage.getItem('personal')|| '{}');
}

submitImage(event:any){
  this.images=event.target.files[0]
  // this.filename = this.images.name;
  const reader = new FileReader();
  reader.readAsDataURL(this.images);
  reader.onload = (_event) => {
    this.url = reader.result;
  }
}


personalform= this.fb.group(
{ 
  firstname:['',[Validators.required]],
    lastname:['',[Validators.required]],
    address:['',[Validators.required]],
    city:['',[Validators.required]],
    zipcode:['',[Validators.required]],
    state:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    phone:['',[Validators.required,Validators.maxLength(10)]],
    image:['',[Validators.required]],
    pas:['',[Validators.required]]
}
);

addpersonal(){
  this.personaldetails.imagepath=this.url;
    localStorage.setItem('personal',JSON.stringify(this.personaldetails));
    this.Saved.nativeElement.innerHTML="<div class=alert&#32;alert-primary&#32;col-md-3 role=alert> Saved! </div>"
}
}

