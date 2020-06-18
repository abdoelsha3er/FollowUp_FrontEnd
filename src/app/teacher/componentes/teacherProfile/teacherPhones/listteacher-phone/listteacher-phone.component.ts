import { Component, OnInit } from '@angular/core';
import { TeacherPhonesService } from 'src/app/teacher/_services/teacher-phones.service';
import { TeacherPhonesModels } from 'src/app/teacher/_models/teacher-phones-models';

@Component({
  selector: 'app-listteacher-phone',
  templateUrl: './listteacher-phone.component.html',
  styleUrls: ['./listteacher-phone.component.css']
})
export class ListteacherPhoneComponent implements OnInit {

  teacherPhone:TeacherPhonesModels=new TeacherPhonesModels(1,"010107101",1);
  teacherphones:TeacherPhonesModels[]=[];
  constructor(private teacherphonerservice : TeacherPhonesService ) { }

  ngOnInit() {
    this.teacherphonerservice.getall(this.teacherPhone.TeacherId).subscribe( a=>{
      console.log("a in component.ts for list teacher eduction")
      console.log(a);
      this.teacherphones=a.items;
      console.log("this.educations >> **********")
      console.log(this.teacherphones);
    }
    );
  }
     // Delete Product
     DeleteTeacherPhone( teacherPhoneId,indexs){
      // remove from html
      this.teacherphonerservice.delete(teacherPhoneId).subscribe(a=>{
        this.teacherphones.splice(indexs,1); // remove it from array products , but it deleted in api from services
      })
    
  }

}
