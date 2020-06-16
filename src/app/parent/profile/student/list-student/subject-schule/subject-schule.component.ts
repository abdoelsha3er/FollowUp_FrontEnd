import { Component, OnInit } from '@angular/core';
import { SubjectShcedule } from '../../../../_models/schdelue/subject-shcedule'
import { SubjectSchuleService} from '../../../../_services/schule/subject-schule.service'

@Component({
  selector: 'app-subject-schule',
  templateUrl: './subject-schule.component.html',
  styleUrls: ['./subject-schule.component.css']
})
export class SubjectSchuleComponent implements OnInit {

  subjects : SubjectShcedule[] = [];
  constructor(private subSrv : SubjectSchuleService) { }

  ngOnInit() {
    this.subjects = this.subSrv.getAllsubjects();
  }

}
