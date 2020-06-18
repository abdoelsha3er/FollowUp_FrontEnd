import { Component, OnInit } from '@angular/core';
import { TeacherExperienceModels } from 'src/app/teacher/_models/teacher-experience-models';
import { TeacherExperienceService } from 'src/app/teacher/_services/teacher-experience.service';

@Component({
  selector: 'app-add-teacher-experience',
  templateUrl: './add-teacher-experience.component.html',
  styleUrls: ['./add-teacher-experience.component.css']
})
export class AddTeacherExperienceComponent implements OnInit {
  teacherExprince:TeacherExperienceModels=new TeacherExperienceModels(1,"","","",1);
  constructor(private teacherExperinceservice:TeacherExperienceService) { }

  add()
  {
       this.teacherExperinceservice.add(this.teacherExprince).subscribe(a=>{
         console.log("teacxprince in component.td  //******-");
         console.log(this.teacherExprince);
         console.log("TeacherExprince Added Successfully!!!");
      })
    }

  ngOnInit() {
  }

}
