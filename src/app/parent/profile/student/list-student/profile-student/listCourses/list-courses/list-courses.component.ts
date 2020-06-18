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
<<<<<<< HEAD
    // this.teachers = this.tchrSrv.getAllTeachers();  // you can get all teacher of student from service teacher
=======
    this.teachers = this.tchrSrv.getAllTeachers();
    this.parentId =this.ar.snapshot.params['ParentId'];
    this.studentId =this.ar.snapshot.params['StudentId'];
  }
  updateprofile()
  {
    this.r.navigateByUrl("/Student/StudentUpdate/"+this.parentId+"/"+this.studentId ); 
>>>>>>> b980906718d39b96ac3955409687282a9ff08ea9
  }

}
