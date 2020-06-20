import { Component, OnInit } from '@angular/core';
import { TeacherModels } from '../../../../../../../teacher/_models/teacher-models'
import {TeacherService } from '../../../../../../../teacher/_services/teacher.service'
import {ActivatedRoute,Router} from'@angular/router'
@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {

  teachers : TeacherModels[] = [];
  parentId:number;
  studentId:number;
  constructor(private tchrSrv : TeacherService,private r:Router,private ar:ActivatedRoute) { }

  ngOnInit() {

    // this.teachers = this.tchrSrv.getAllTeachers();  // you can get all teacher of student from service teacher
    // this.teachers = this.tchrSrv.GetTeachers();
    this.parentId =this.ar.snapshot.params['ParentId'];
    this.studentId =this.ar.snapshot.params['StudentId'];
  }
  updateprofile()
  {
    this.r.navigateByUrl("/Student/StudentUpdate/"+this.parentId+"/"+this.studentId ); 
  }

}
