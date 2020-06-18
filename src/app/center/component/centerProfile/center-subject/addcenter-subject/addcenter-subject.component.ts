import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject/_service/subject.service';
import { CategorySubject } from 'src/app/category/_model/category-subject';
import { Subject } from 'src/app/subject/_model/subject';
import { EductionalCenterSubjects } from 'src/app/center/_models/eductional-center-subjects';
import { EductionalCenterSubjectsService } from 'src/app/center/_services/eductional-center-subjects.service';
import { Router } from '@angular/router';
import { CategorySubjectService } from 'src/app/category/_service/category-subject.service';

@Component({
  selector: 'app-addcenter-subject',
  templateUrl: './addcenter-subject.component.html',
  styleUrls: ['./addcenter-subject.component.css']
})
export class AddcenterSubjectComponent implements OnInit {
  allCategorySubjects : CategorySubject[] = [];
  allSubjects:Subject[] = [];
  cat_id:number;
  centerSubject:EductionalCenterSubjects=new EductionalCenterSubjects(1,1);
  constructor(
    private centersubjectservice:EductionalCenterSubjectsService,
    private r:Router,
    private categorysubjectservice:CategorySubjectService,    // ngModel
    private subjectservice:SubjectService, 
    ) { }

  add()
   {
      this.centersubjectservice.add(this.centerSubject).subscribe(a=>{
        console.log("center Subjec new in component.ts : - ");
        console.log(a);
        console.log("center Added Added Successfully!!!");
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
