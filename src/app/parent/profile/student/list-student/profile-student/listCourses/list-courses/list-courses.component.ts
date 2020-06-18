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
    // this.teachers = this.tchrSrv.getAllTeachers();  // you can get all teacher of student from service teacher
  }

}
