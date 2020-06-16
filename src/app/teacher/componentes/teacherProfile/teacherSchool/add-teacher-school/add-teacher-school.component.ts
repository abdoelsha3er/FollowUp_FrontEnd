import { Component, OnInit } from '@angular/core';
import { TeacherSchoolService } from 'src/app/teacher/_services/teacher-school.service';
import { TeacherSchoolsModels } from 'src/app/teacher/_models/teacher-schools-models';

@Component({
  selector: 'app-add-teacher-school',
  templateUrl: './add-teacher-school.component.html',
  styleUrls: ['./add-teacher-school.component.css']
})
export class AddTeacherSchoolComponent implements OnInit {

  school:TeacherSchoolsModels= new TeacherSchoolsModels(7,"");
  
  constructor(private teacherschool:TeacherSchoolService) { }
  
  add()
   {
        this.teacherschool.addschool(this.school).subscribe();
   }

  ngOnInit() {
    
  }

}
