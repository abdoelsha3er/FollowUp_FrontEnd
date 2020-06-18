import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../../../_services/student/student-service.service';
import {  Student } from '../../../_models/student/student'
import { Router, ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {


  students : Student[]=[];
  constructor(private std:StudentServiceService,private rout:Router, private ar:ActivatedRoute) { }

  ngOnInit() {
    let parentId:number =this.ar.snapshot.params['parentId'];
    this.std.getAllStudents(parentId).subscribe(a => this.students = a) 
  }


  getAllstudents()
  {
    

    
  }
}
