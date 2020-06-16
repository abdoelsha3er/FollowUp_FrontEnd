import { Component, OnInit } from '@angular/core';
import { TeacherSchoolService } from 'src/app/teacher/_services/teacher-school.service';
import { TeacherSchoolsModels } from 'src/app/teacher/_models/teacher-schools-models';

@Component({
  selector: 'app-list-teacher-school',
  templateUrl: './list-teacher-school.component.html',
  styleUrls: ['./list-teacher-school.component.css']
})
export class ListTeacherSchoolComponent implements OnInit {

  constructor(private schoolservice:TeacherSchoolService) { }
  sch:TeacherSchoolsModels= new TeacherSchoolsModels(1,"");
 
  schools:TeacherSchoolsModels []=[];

  ngOnInit() {
    
    this.schoolservice.getall(this.sch.TeacherId).subscribe( a=>{
      this.schools=a.items;
      console.log(this.schools);
    }
    );
  }


}
