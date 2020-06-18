import { Component, OnInit } from '@angular/core';
import { TeacherPhonesModels } from 'src/app/teacher/_models/teacher-phones-models';
import { TeacherPhonesService } from 'src/app/teacher/_services/teacher-phones.service';

@Component({
  selector: 'app-addteacher-phone',
  templateUrl: './addteacher-phone.component.html',
  styleUrls: ['./addteacher-phone.component.css']
})
export class AddteacherPhoneComponent implements OnInit {

  teacherPhone:TeacherPhonesModels=new TeacherPhonesModels(1,"",1);

  constructor(private teacherphoneservice:TeacherPhonesService) { }


  add()
  {
       this.teacherphoneservice.add(this.teacherPhone).subscribe(a=>{
         console.log("teacherphone in component.td  //******-");
         console.log(this.teacherPhone);
         console.log("Teacherphone Added Successfully!!!");
      })
    }

  ngOnInit() {
  }

}
