import { Component, OnInit } from '@angular/core';
import { TeacherModels } from '../../../../../../../teacher/_models/teacher-models'
import {TeacherService } from '../../../../../../../teacher/_services/teacher.service'

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  teachers : TeacherModels[] = [];
  constructor(private tchrSrv : TeacherService) { }

  ngOnInit() {
<<<<<<< HEAD

    // this.teachers = this.tchrSrv.getAllTeachers();  // you can get all teacher of student from service teacher
    // this.teachers = this.tchrSrv.GetTeachers();
    this.parentId =this.ar.snapshot.params['ParentId'];
    this.studentId =this.ar.snapshot.params['StudentId'];
  }
  updateprofile()
  {
    this.r.navigateByUrl("/Student/StudentUpdate/"+this.parentId+"/"+this.studentId ); 
=======
    // this.teachers = this.tchrSrv.getAllTeachers();  // you can get all teacher of student from service teacher
>>>>>>> b7ac86eb9db56355ba1ed6a639d0652cc9ac1421
  }

}
