import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategorySubject } from 'src/app/category/_model/category-subject';
import { TeacherModels } from 'src/app/teacher/_models/teacher-models';
import { Grade } from 'src/app/grade/_model/grade';
import { Subject } from 'src/app/subject/_model/subject';
import { EductionalCenterGroup } from 'src/app/center/_models/eductional-center-group';
import { EductionalCenterGroupService } from 'src/app/center/_services/eductional-center-group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorySubjectService } from 'src/app/category/_service/category-subject.service';
import { SubjectService } from 'src/app/subject/_service/subject.service';
import { TeacherService } from 'src/app/teacher/_services/teacher.service';
import { GradeService } from 'src/app/grade/_service/grade.service';


@Component({
  selector: 'app-Center-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.css']
})
export class CenterEditGroupComponent implements OnInit {
  allCategorySubjects : CategorySubject[] = [];
  allSubjects:Subject[] = [];
  allTeachers:TeacherModels[] = [];
  allGrades:Grade[] = [];
  cat_id:number;
  arr:any[]=[];
  id:number;
  @ViewChild("fileInput",{static:false}) fileInput:ElementRef
  eductionalCenterGroup:EductionalCenterGroup=new EductionalCenterGroup(0,'',0,0,0,0,'','',0,
  new Date("01/07/1993").toLocaleDateString(),new Date("01/07/1993").toLocaleDateString(),0,'','');
  constructor(
    private route:ActivatedRoute,
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
      this.route.params.subscribe(prams=>{
        this.id= parseInt(prams['id']);
        console.log("this.id"+this.id);
        this.eductionalcentergroupservice.GetEductionalCenterGroupById(this.id).subscribe(a=>{
          this.eductionalCenterGroup=a;
        })
      });
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
onSaveChaneges(){
  var nativeElement :HTMLInputElement = this.fileInput.nativeElement;  // catch input
  var file=nativeElement.files[0];
  nativeElement.value="";
  this.eductionalcentergroupservice.Edit(this.eductionalCenterGroup,this.id,file).subscribe(a=>{
    this.r.navigateByUrl("/center/list/group");
  });
}

}
