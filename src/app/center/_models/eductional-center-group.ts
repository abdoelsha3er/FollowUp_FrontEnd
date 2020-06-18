import { TeacherModels } from 'src/app/teacher/_models/teacher-models';
import { Subject } from 'src/app/subject/_model/subject';
import { Grade } from 'src/app/grade/_model/grade';

export class EductionalCenterGroup {
    constructor(
        public eductionalCenterGroupId:number,
        public name:string,
        public eductionalCenterId:number,
        public teacherId:number,
        public subjectId:number,
        public gradeId:number,
        public description:string,
        public logo:string,
        public totleStudents:number,
        public dateFrom:string,
        public dateTo:string,
        public priceInMonth:number,
        public status:string,
        public archivedReason:string,
        public teacher:TeacherModels=null,
        public subject:Subject=null,
        public grade:Grade=null,
       ){};
}
