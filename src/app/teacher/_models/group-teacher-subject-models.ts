export class GroupTeacherSubjectModels {
    constructor(  
        public GroupId:number,
        public TeacherId:string,
        public SubjectId:string,
        public DateFrom:Date,
        public DateTo:Date,
        public PriceOfMonth:number,

    ){}
}
