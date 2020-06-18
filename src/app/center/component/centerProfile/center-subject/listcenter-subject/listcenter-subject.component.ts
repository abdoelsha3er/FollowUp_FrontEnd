import { Component, OnInit } from '@angular/core';
import { EductionalCenterSubjectsService } from 'src/app/center/_services/eductional-center-subjects.service';
import { EductionalCenterSubjects } from 'src/app/center/_models/eductional-center-subjects';

@Component({
  selector: 'app-listcenter-subject',
  templateUrl: './listcenter-subject.component.html',
  styleUrls: ['./listcenter-subject.component.css']
})
export class ListcenterSubjectComponent implements OnInit {

  constructor(private centerservice:EductionalCenterSubjectsService) { }
  centerSubject:EductionalCenterSubjects=new EductionalCenterSubjects(1,1);

  centerSubjects:EductionalCenterSubjects []=[];

  ngOnInit() {
    this.centerservice.getall(this.centerSubject.eductionalCenterId).subscribe( a=>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
      console.log(a);
      this.centerSubjects=a;
      console.log("teacher ******* subjects");
      console.log(this.centerSubjects);
    }
    )
  }

  DeleteTeacherSubject(centerSubject,indexs){
    // remove from html
    this.centerservice.delete(centerSubject).subscribe(a=>{
      this.centerSubjects.splice(indexs,1); // remove it from array products , but it deleted in api from services
    })

}
}
