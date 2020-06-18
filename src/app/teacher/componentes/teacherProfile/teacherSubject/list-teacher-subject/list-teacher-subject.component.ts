import { Component, OnInit } from '@angular/core';
import { TeacherSubjectService } from 'src/app/teacher/_services/teacher-subject.service';
import { TeacherSubjectModels } from 'src/app/teacher/_models/teacher-subject-models';

@Component({
  selector: 'app-list-teacher-subject',
  templateUrl: './list-teacher-subject.component.html',
  styleUrls: ['./list-teacher-subject.component.css']
})
export class ListTeacherSubjectComponent implements OnInit {

  constructor(private teachersubjectservice:TeacherSubjectService) { }
  teacherSubject:TeacherSubjectModels=new TeacherSubjectModels(1,1);
 
  teacherSubjects:TeacherSubjectModels []=[];

  ngOnInit() {  // get all by teacherId
    this.teachersubjectservice.getall(this.teacherSubject.TeacherId).subscribe( a=>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
      console.log(a);
      this.teacherSubjects=a.items;
      console.log("teacher ******* subjects");
      console.log(this.teacherSubjects);
    }
    )
  }

  // Delete Product
  DeleteTeacherSubject(teacherSubject,indexs){
    // remove from html
    this.teachersubjectservice.delete(teacherSubject).subscribe(a=>{
      this.teacherSubjects.splice(indexs,1); // remove it from array products , but it deleted in api from services
    })
  }

}
