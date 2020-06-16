import { Injectable } from '@angular/core';
import { SubjectShcedule } from '../../_models/schdelue/subject-shcedule'

@Injectable({
  providedIn: 'root'
})
export class SubjectSchuleService {

  subjects : SubjectShcedule[] =[
    new SubjectShcedule('Arabic', ['sat', 'sun', 'wed'], [3, 2, 6]),
    new SubjectShcedule('English', ['wed', 'mon', 'thur'], [5, 4, 1]),
    new SubjectShcedule('Math', ['sat', 'sun', 'wed'], [7, 2, 6]),
    new SubjectShcedule('Science', ['sat', 'mon', 'wed'], [3, 2, 6]),
    new SubjectShcedule('French', ['wed', 'thues', 'thur'], [5, 4, 1]),
    new SubjectShcedule('Computer', ['sun', 'mon', 'fri'], [7, 2, 6]),
  ]
  constructor() { }

  getAllsubjects(){
    return this.subjects;
  }
}
