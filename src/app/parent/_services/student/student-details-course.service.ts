import { Injectable } from '@angular/core';
import {StudentDetailsCourse} from '../../_models/student/student-details-course';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsCourseService {
  studentDetailsCourse=new StudentDetailsCourse (1,"sss",4);

  getStudentDetailsCoursce(){
    return this.studentDetailsCourse;
  }
  constructor() {
  
   }
}
