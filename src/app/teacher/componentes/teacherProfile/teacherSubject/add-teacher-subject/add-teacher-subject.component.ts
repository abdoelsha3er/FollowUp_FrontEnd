import { Component, OnInit } from '@angular/core';
import { TeacherSubjectModels } from 'src/app/teacher/_models/teacher-subject-models';
import { TeacherSubjectService } from 'src/app/teacher/_services/teacher-subject.service';
import { CategorySubject } from 'src/app/category/_model/category-subject';
import { Subject } from 'src/app/subject/_model/subject';
import { Router } from '@angular/router';
import { CategorySubjectService } from 'src/app/category/_service/category-subject.service';
import { SubjectService } from 'src/app/subject/_service/subject.service';

@Component({
  selector: 'app-add-teacher-subject',
  templateUrl: './add-teacher-subject.component.html',
  styleUrls: ['./add-teacher-subject.component.css']
})
export class AddTeacherSubjectComponent implements OnInit {
  allCategorySubjects : CategorySubject[] = [];
  allSubjects:Subject[] = [];
  cat_id:number;
  teacherSubject:TeacherSubjectModels=new TeacherSubjectModels(1,1);
  constructor(
    private teachersubjectservice:TeacherSubjectService,
    private r:Router,
    private categorysubjectservice:CategorySubjectService,    // ngModel
    private subjectservice:SubjectService, 
    ) { }

  add()
   {
      this.teachersubjectservice.add(this.teacherSubject).subscribe(a=>{
        console.log("Teacher Subjec new in component.ts : - ");
        console.log(a);
        console.log("Teacher Added Added Successfully!!!");
      })
   }
   
  ngOnInit() {
    this.categorysubjectservice.GetAllCategories().subscribe(a=>{
      this.allCategorySubjects=a;
    })
  }
  selectSubject(catid:number){                // get all Cities
    this.subjectservice.GetSubjectsByCategoryId(catid).subscribe(a=>{
    this.allSubjects = a;
  });
}

}
