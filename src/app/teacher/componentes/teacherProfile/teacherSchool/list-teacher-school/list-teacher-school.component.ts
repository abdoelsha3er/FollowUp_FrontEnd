import { Component, OnInit } from '@angular/core';
import { TeacherSchoolService } from 'src/app/teacher/_services/teacher-school.service';
import { TeacherSchoolsModels } from 'src/app/teacher/_models/teacher-schools-models';

@Component({
  selector: 'app-list-teacher-school',
  templateUrl: './list-teacher-school.component.html',
  styleUrls: ['./list-teacher-school.component.css']
})
export class ListTeacherSchoolComponent implements OnInit {

  constructor(private schoolservice:TeacherSchoolService) { }
  sch:TeacherSchoolsModels= new TeacherSchoolsModels(0,"",1);
 
  schools:TeacherSchoolsModels []=[];

  ngOnInit() {
    
    this.schoolservice.getall(this.sch.TeacherId).subscribe( a=>{
      this.schools=a.items;
      console.log(this.schools);
    }
    );
  }

    // Delete Product
    DeleteTeacherSchool(teacherschoolid,indexs){
      // remove from html
      this.schoolservice.delete(teacherschoolid).subscribe(a=>{
        this.schools.splice(indexs,1); // remove it from array products , but it deleted in api from services
      })
    }

}
