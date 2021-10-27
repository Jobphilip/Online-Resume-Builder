import { Component, OnInit,ViewChild,ElementRef  } from '@angular/core';
import { UserdataService } from '../service/userdata.service'
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-download2',
  templateUrl: './download2.component.html',
  styleUrls: ['./download2.component.css']
})
export class Download2Component implements OnInit {

  @ViewChild('doc2', {static:false}) el!: ElementRef;

  userdata={
    data: {
        id: String,
        username: String,
        email: String,
        password: String
    },
    personal: {
        firstname: String,
        lastname: String,
        address: String,
        city: String,
        zipcode: String,
        state: String,
        email: String,
        phone: String,
        image: String,
        imagepath: String,
        pas: String
    },
    experience: {
        employer: String,
        jobtitle: String,
        city: String,
        state: String,
        startdate: String,
        enddate: String,
        video: String
    },
    education: {
        scname: String,
        city: String,
        state: String,
        degree: String,
        study: String,
        pass: String,
        degre: String
    },
    skill: {
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
}
del={
    id: String
} 
  constructor(private user : UserdataService) { }

  
    ngOnInit(): void {
      this.userdata.personal = JSON.parse(localStorage.getItem('personal')|| '{}');
      this.userdata.experience = JSON.parse(localStorage.getItem('experience')|| '{}');
      this.userdata.skill = JSON.parse(localStorage.getItem('skill')|| '{}');
      this.userdata.education = JSON.parse(localStorage.getItem('education')|| '{}');
      this.userdata.data = JSON.parse(localStorage.getItem('data')|| '{}');
      this.del.id = JSON.parse(localStorage.getItem('value')|| '{}')
    }
    save(){
        this.user.saveuser(this.userdata).subscribe(res=>{
            console.log('success');
        });
        let pdf = new jsPDF('p', 'mm', [1300, 1100]);
        pdf.html(this.el.nativeElement,{
        callback:(pdf)=>{
        pdf.save("Resume.pdf");
      }
    });
      }
      removeuser(){
          this.user.deleteuser(this.del.id).subscribe(res=>{
              console.log('delete');
          })
      }
  }

