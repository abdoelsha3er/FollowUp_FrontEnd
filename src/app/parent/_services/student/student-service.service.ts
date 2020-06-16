import { Injectable } from '@angular/core';
import { Student } from '../../_models/student/student'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  students : Student[]=[
   
      new Student(1, 'hager'),
      new Student(2, 'mostafa'),
      new Student(3, 'mariam')
   
  ]

  getAllStudents(){
    return this.students;
  }
  constructor() { }
}
