import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { LoginService } from '../service/login.service';
import{Router} from '@angular/router';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('alert', { static: true })
Alert!: ElementRef;
@ViewChild('reset', { static: true })
Reset!: ElementRef;

  
  hide = true;
  user={
      username:'', 
      email:'',
      password:''
  }
 

constructor(private fb : FormBuilder,private signup: LoginService,private router: Router) { }


ngOnInit(): void {
}

  signupForm= this.fb.group(
      {   
          username:['',Validators.required],
          email:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]],
          password:['',[Validators.minLength(6),Validators.required]]
      }
  );
 
  loginUser(){
    // localStorage.setItem('token','user')
    //           this.router.navigate(['/signin'])
      this.signup.signupUser(this.user).subscribe(
          res=>{
              console.log(res)
              
             },
        
       err => {
        if(err.status == 401){
            this.Alert.nativeElement.innerHTML="<div class=alert&#32;alert-danger role=alert>Already SignUp with this Email id.</div>";
            this.signupForm.reset();
        }
        else{
            this.Reset.nativeElement.innerHTML="<div class=successimg><img src=/assets/images/success.png></div> <div class=alert&#32;alert-success role=alert>Succesfully Signed up</div> <div><a class=buttoncont href=/signin>Continue</a></div>";
            
          }
      }
      )
  }
}
