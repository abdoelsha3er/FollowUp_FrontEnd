import { Component, OnInit } from '@angular/core';
import { TeacherExperienceService } from 'src/app/teacher/_services/teacher-experience.service';
import { TeacherExperienceModels } from 'src/app/teacher/_models/teacher-experience-models';

@Component({
  selector: 'app-list-teacher-experience',
  templateUrl: './list-teacher-experience.component.html',
  styleUrls: ['./list-teacher-experience.component.css']
})
export class ListTeacherExperienceComponent implements OnInit {

  constructor(private exprinceservice:TeacherExperienceService) { }
  teacherExprince:TeacherExperienceModels= new TeacherExperienceModels(1,"","","",1);
  exprinces:TeacherExperienceModels []=[];

 
  ngOnInit() {
    this.exprinceservice.getall(this.teacherExprince.TeacherId).subscribe( a=>{
      console.log("a in component.ts for list teacher eduction")
      console.log(a);
      this.exprinces=a.items;
      console.log("this.educations >> **********")
      console.log(this.exprinces);
    }
    );
  }

  DeleteTeacherExprince(teacherExperienceId,indexs){
    // remove from html
    this.exprinceservice.delete(teacherExperienceId).subscribe(a=>{
      this.exprinces.splice(indexs,1); // remove it from array products , but it deleted in api from services
    })
  
}

}

