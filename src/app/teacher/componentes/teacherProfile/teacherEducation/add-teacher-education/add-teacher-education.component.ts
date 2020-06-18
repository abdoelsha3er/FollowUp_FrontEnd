import { Component, OnInit } from '@angular/core';
import { TeacherEducationModels } from 'src/app/teacher/_models/teacher-education-models';
import { TeacherEducationService } from 'src/app/teacher/_services/teacher-education.service';

@Component({
  selector: 'app-add-teacher-education',
  templateUrl: './add-teacher-education.component.html',
  styleUrls: ['./add-teacher-education.component.css']
})
export class AddTeacherEducationComponent implements OnInit {
  teacherEduction:TeacherEducationModels=new TeacherEducationModels(1,"",1);

  constructor(private teachereducationservice:TeacherEducationService ) { }
  add()
  {
       this.teachereducationservice.add(this.teacherEduction).subscribe(a=>{
         console.log("teacherEduction in component.td  //******-");
         console.log(this.teacherEduction);
         console.log("Teache Education Added Successfully!!!");
      })
  }
  ngOnInit() {
  }

}
