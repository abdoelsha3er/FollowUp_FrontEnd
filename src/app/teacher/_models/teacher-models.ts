import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

export class TeacherModels {
    constructor(  
        public FirstName:string, 
        public LastName:string, 
        public UserName :string,
        public Email:string,   
        public Password :string,
        public Picture:string, 
        public CityId:number, 
        public AddressDetails :string,
        public Gender:string,
        public DateOfBirth :string,  // covert to date
        public About :string,

    ){}

}
