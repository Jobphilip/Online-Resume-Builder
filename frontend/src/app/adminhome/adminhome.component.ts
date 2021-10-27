import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  @ViewChild('adminsignup', { static: true })
  Adminsignup!: ElementRef;
  @ViewChild('admndata', { static: true })
  Admindata!: ElementRef;
  @ViewChild('userdata', { static: true })
  Userdata!: ElementRef;
  @ViewChild('alert', { static: true })
  Alert!: ElementRef;

  hide = true;
  admindata={
      email:'',
      password:''
  }
  users=[{
      username:'',
      email:'',
      password:''}];
  admins=[{
      username:'',
      email:'',
      password:''}];

constructor(private fb : FormBuilder,private signup: LoginService) {}

ngOnInit(): void {
  this.signup.getuser().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));
  })
  this.signup.getadmin().subscribe((data)=>{
      this.admins=JSON.parse(JSON.stringify(data));
  })
  this.Adminsignup.nativeElement.removeAttribute("hidden");
  this.Admindata.nativeElement.setAttribute("hidden","");
  this.Userdata.nativeElement.setAttribute("hidden","");
}
  adminForm= this.fb.group(
  {   
      email:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]],
      password:['',[Validators.minLength(6),Validators.required]]
  });
  addadmin(){
      this.signup.adminadd(this.admindata).subscribe(
          res=>{
              console.log(res)
          },
          err => {
              if(err.status == 401){
                this.Alert.nativeElement.innerHTML="<div class=alert&#32;alert-danger role=alert>Found an Admin with this Email id.</div>";
                  this.adminForm.reset(); 
              }
              else{
                this.Alert.nativeElement.innerHTML='<div class=alert&#32;alert-success role=alert>Admin Added!</div>'; 
                  setTimeout(() => { this.Alert.nativeElement.innerHTML='';},2000);
                  this.adminForm.reset(); 
              }
            }
      )
  }

  add(){
    this.Adminsignup.nativeElement.removeAttribute("hidden");
    this.Admindata.nativeElement.setAttribute("hidden","");
    this.Userdata.nativeElement.setAttribute("hidden","");
  }
  user(){
    this.Adminsignup.nativeElement.setAttribute("hidden","");
    this.Admindata.nativeElement.setAttribute("hidden","");
    this.Userdata.nativeElement.removeAttribute("hidden");
  }
  admin(){
    this.Adminsignup.nativeElement.setAttribute("hidden","");
    this.Admindata.nativeElement.removeAttribute("hidden");
    this.Userdata.nativeElement.setAttribute("hidden","");
  }
  delete(){
      localStorage.removeItem("token");
  }
}

