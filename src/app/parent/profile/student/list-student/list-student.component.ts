import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../../_services/student/student-service.service';
import {  Student } from '../../../_models/student/student'

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students : Student[]=[];
  constructor(private std:StudentServiceService) { }

  ngOnInit() {
    this.students =this.std.getAllStudents();
  }

}
