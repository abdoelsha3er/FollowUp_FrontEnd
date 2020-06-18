import { Component, OnInit } from '@angular/core';
import { TeacherEducationService } from 'src/app/teacher/_services/teacher-education.service';
import { TeacherEducationModels } from 'src/app/teacher/_models/teacher-education-models';

@Component({
  selector: 'app-list-teacher-education',
  templateUrl: './list-teacher-education.component.html',
  styleUrls: ['./list-teacher-education.component.css']
})
export class ListTeacherEducationComponent implements OnInit {
  constructor(private educationservice:TeacherEducationService) { }
  teacherEducation:TeacherEducationModels= new TeacherEducationModels(1,"",1);
 
  educations:TeacherEducationModels []=[];

  

  ngOnInit() {
    this.educationservice.getall(this.teacherEducation.TeacherId).subscribe( a=>{
      console.log("a in component.ts for list teacher eduction")
      console.log(a);
      this.educations=a.items;
      console.log("this.educations >> **********")
      console.log(this.educations);
    }
    );
  }
    // Delete Product
    DeleteTeacherEducation( teacherEducationId,indexs){
      // remove from html
      this.educationservice.delete(teacherEducationId).subscribe(a=>{
        this.educations.splice(indexs,1); // remove it from array products , but it deleted in api from services
      })
    
  }

}
