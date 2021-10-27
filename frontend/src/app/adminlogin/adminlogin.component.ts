import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { LoginService } from '../service/login.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  @ViewChild('alert', { static: true })
  Alert!: ElementRef;
  hide = true;
  admin={ 
      email:'',
      password:''
  }
  

constructor(private fb : FormBuilder,private login: LoginService,private router: Router) { }

ngOnInit(): void {
}

adminForm= this.fb.group(
  {            
    email:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]],
    password:['',[Validators.minLength(6),Validators.required]]
  }
);
loginAdmin(){
  if(this.admin.email=="admin@gmail.com" && this.admin.password=="admin123"){
    localStorage.setItem('token','admin')
  this.router.navigate(['/adminhome'])
  }
  else{
  this.login.adminLogin(this.admin)

.subscribe(
  
    res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/adminhome'])
    },
    
    err => {
      console.log(err);
      if(err.status == 401){
        console.log(err);
        this.Alert.nativeElement.innerHTML="<div class=alert&#32;alert-danger role=alert>You are not a registered Admin.Or check your Email & Password </div>";
      }
  })
}
}
}

