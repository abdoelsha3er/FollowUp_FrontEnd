import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EductionalCenterGroup } from 'src/app/center/_models/eductional-center-group';
import { Router } from '@angular/router';
import { EductionalCenterGroupService } from 'src/app/center/_services/eductional-center-group.service';
import { CategorySubjectService } from 'src/app/category/_service/category-subject.service';
import { SubjectService } from 'src/app/subject/_service/subject.service';
import { CategorySubject } from 'src/app/category/_model/category-subject';
import { Subject } from 'src/app/subject/_model/subject';
import { TeacherService } from 'src/app/teacher/_services/teacher.service';
import { TeacherModels } from 'src/app/teacher/_models/teacher-models';
import { GradeService } from 'src/app/grade/_service/grade.service';
import { Grade } from 'src/app/grade/_model/grade';

@Component({
  selector: 'app-center-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class CenterAddGroupComponent implements OnInit {
 
  allCategorySubjects : CategorySubject[] = [];
  allSubjects:Subject[] = [];
  allTeachers:TeacherModels[] = [];
  allGrades:Grade[] = [];
  cat_id:number;
  arr:any[]=[];
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef
  // static arrayname: any[] = [{Status:0, name:"Open"},{Status:1, name:"Closed"},{Status:2, name:"Archived"}];

  eductionalCenterGroup:EductionalCenterGroup=new EductionalCenterGroup(1,"Group2Frensh",1,1,1,1,"desc","",20,
  new Date("01/07/1993").toLocaleDateString(),new Date("01/07/1993").toLocaleDateString(),
  240,"Opening","");
  constructor(
    private eductionalcentergroupservice:EductionalCenterGroupService,
    private r:Router,
    private categorysubjectservice:CategorySubjectService,    // ngModel
    private subjectservice:SubjectService,
    private teacherservice : TeacherService,
    private gradeservice : GradeService
  ) { }

// File choose
onUploadPhoto(){
  
  console.log(this.fileInput);
}

  ngOnInit() {
    this.categorysubjectservice.GetAllCategories().subscribe(a=>{
      console.log(a);
      this.allCategorySubjects=a;
    });
    // get all teachers
    this.teacherservice.GetTeachers().subscribe(a=>{
      this.allTeachers=a;
    });
    // get all Grades
    this.gradeservice.GetGrades().subscribe(a=>{
      this.allGrades=a;
    })
  }
  selectSubject(catid:number){                // get all Cities
    this.subjectservice.GetSubjectsByCategoryId(catid).subscribe(a=>{
    this.allSubjects = a.items;
    });
  }

  // add new Group
  add(){
    var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
    var file=nativeElement.files[0];
    nativeElement.value="";
    console.log(this.eductionalCenterGroup);
    this.eductionalcentergroupservice.add(this.eductionalCenterGroup,file).subscribe(a=>{
      console.log("New Group dta in component ");
      console.log(a);
      this.r.navigateByUrl("/center/list/group");
    })
  }
}
