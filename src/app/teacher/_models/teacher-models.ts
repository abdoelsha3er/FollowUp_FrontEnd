import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

export class TeacherModels {
    constructor( 
        public teacherId:number,
        public firstName:string, 
        public lastName:string, 
        public userName :string,
        public email:string,   
        public password :string,
        public cityId:number, 
        public addressDetails :string,
        public gender:string,
        public dateOfBirth :string,  // covert to date
        public about :string,
    ){}

}
