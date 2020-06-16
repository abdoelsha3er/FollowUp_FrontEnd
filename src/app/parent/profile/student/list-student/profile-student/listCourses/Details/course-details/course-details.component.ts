import { Component, OnInit } from '@angular/core';
import {StudentDetailsCourseService} from '../../../../../../../_services/student/student-details-course.service';
import {StudentDetailsCourse} from '../../../../../../../_models/student/student-details-course';
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  studentDetailsCourse : StudentDetailsCourse;
  constructor(private std:StudentDetailsCourseService) { }

  ngOnInit() {
    this.studentDetailsCourse =this.std.getStudentDetailsCoursce();
  }

}
