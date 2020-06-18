import { Component, OnInit } from '@angular/core';
import { TeacherLinksService } from 'src/app/teacher/_services/teacher-links.service';
import { TeacherLinksModels } from 'src/app/teacher/_models/teacher-links-models';

@Component({
  selector: 'app-list-teacher-links',
  templateUrl: './list-teacher-links.component.html',
  styleUrls: ['./list-teacher-links.component.css']
})
export class ListTeacherLinksComponent implements OnInit {

  constructor(private teachersociallink:TeacherLinksService) { }
  links:TeacherLinksModels=new TeacherLinksModels(1,"",1);
  linkss:TeacherLinksModels[]=[];

  ngOnInit() {
    
  }
  DeleteTeacherlink(teacherSocialLinkId,indexs){
    // remove from html
    this.teachersociallink.delete(teacherSocialLinkId).subscribe(a=>{
      this.linkss.splice(indexs,1); // remove it from array products , but it deleted in api from services
    })
  }

}
