import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherRegisterComponent } from './teacher/componentes/teacher-register/teacher-register.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './shared/login/login.component';
import { TeacherProfileComponent } from './teacher/componentes/teacherProfile/teacher-profile/teacher-profile.component';
import { AddGroupComponent } from './teacher/componentes/teacherGroup/add-group/add-group.component';
import { EditGroupComponent } from './teacher/componentes/teacherGroup/edit-group/edit-group.component';
import { ListGroupComponent } from './teacher/componentes/teacherGroup/list-group/list-group.component';
import { AddReportComponent } from './report/componentes/add-report/add-report.component';
import { ListReportComponent } from './report/componentes/list-report/list-report.component';
import { UpdateReportComponent } from './report/componentes/update-report/update-report.component';
import { SendReportComponent } from './report/componentes/send-report/send-report.component';
import { DetailsReportComponent } from './report/componentes/details-report/details-report.component';
import { AboutComponent } from './shared/about/about.component';
import { BlogComponent } from './shared/blog/blog.component';
import { ContactComponent } from './shared/contact/contact.component';
import { DetailsGroupComponent } from './teacher/componentes/teacherGroup/details-group/details-group.component';
import { AllteacherComponent } from './shared/allteacher/allteacher.component';
/////////////////////
import {ReportComponent } from './parent/profile/student/list-student/profile-student/listCourses/Report/report/report.component'
import {ShowReportComponent} from './parent/profile/student/list-student/profile-student/listCourses/Report/show-report/show-report.component';
import { RegisterComponent } from './parent/register/register.component';
import{AddStudentComponent} from './parent/profile/student/add-student/add-student.component';
import { ParentProfileComponent } from './parent/profile/parent-profile/parent-profile.component'
import { StudentProfileComponent} from './parent/profile/student/list-student/profile-student/student-profile/student-profile.component'
import {DetailsComponent} from './parent/profile/student/list-student/profile-student/listCourses/Details/details/details.component'
import {SubjectSchuleComponent} from './parent/profile/student/list-student/subject-schule/subject-schule.component'
import { JoinGroupComponent } from './parent/profile/student/join-group/join-group.component'
import {UpdateStudentComponent} from './parent/profile/student/update-student/update-student.component';
import { CenterNavComponent } from './center/_core/center-nav/center-nav.component';
import { CenterRegisterComponent } from './center/component/center-register/center-register.component';
import { CenterBioComponent } from './center/component/centerProfile/center-bio/center-bio.component';
import { CenterLinksComponent } from './center/component/centerProfile/center-links/center-links.component';
import { CenterListTeacherComponent } from './center/component/center-list-teacher/center-list-teacher.component';
import { CenterListSubjectComponent } from './center/component/center-list-subject/center-list-subject.component';
import {CenterProfileComponent} from './center/component/centerProfile/center-profile/center-profile.component'
import {CenterAddGroupComponent} from './center/component/centerGroup/add-group/add-group.component';
import {CenterDetailsGroupComponent} from './center/component/centerGroup/details-group/details-group.component';
import {CenterEditGroupComponent} from './center/component/centerGroup/edit-group/edit-group.component';
import {CenterListGroupComponent} from './center/component/centerGroup/list-group/list-group.component';
import { TeacherUpdateComponent } from './teacher/componentes/teacher-update/teacher-update.component';
import { CenterUpdateComponent } from './center/component/center-update/center-update.component';
import { ParentUpdateComponent } from './parent/parent-update/parent-update.component';
import { TopComponent } from './shared/top/top.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'blog',component:BlogComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'top',component:TopComponent},
  {path:'allteacher',component:AllteacherComponent},
  {path:'teacher/register',component:TeacherRegisterComponent},
  {path:'teacher/update/:id',component:TeacherUpdateComponent},
  {path:'teacher/profile',component:TeacherProfileComponent},
  {path:'teacher/add/group',component:AddGroupComponent},
  {path:'teacher/edit/group',component:EditGroupComponent},
  {path:'teacher/list/group',component:ListGroupComponent},
  {path:'teacher/details/group',component:DetailsGroupComponent},
  {path:'teacher/add/report',component:AddReportComponent},
  {path:'teacher/list/report',component:ListReportComponent},
  {path:'teacher/edit/report',component:UpdateReportComponent},
  {path:'teacher/send/report',component:SendReportComponent},
  {path:'teacher/details/report',component:DetailsReportComponent},

  ///////////////////////////////
  {path:'Register', component:RegisterComponent},
  {path:'AddStudent',component:AddStudentComponent},
  {path:'parent/update',component:ParentUpdateComponent},
  {path:'ParentProfile', component:ParentProfileComponent},
  {path:'StudentProfile', component:StudentProfileComponent},
  {path:'StudentDetails',component:DetailsComponent},
  {path:'StudentReport', component:ReportComponent},
  {path:'StudentShowReport',component:ShowReportComponent},
  {path:'ParentJoinGroup', component:JoinGroupComponent},
  {path:'studentSchule',component:SubjectSchuleComponent},
  {path:'StudentUpdate', component:UpdateStudentComponent},
  ///////////////
  {path:'center/register',component:CenterRegisterComponent},
  {path:'center/profile',component:CenterProfileComponent},
  {path:'center/add/group',component:CenterAddGroupComponent},
  {path:'center/edit/group/:id',component:CenterEditGroupComponent},
  {path:'center/list/group',component:CenterListGroupComponent},
  {path:'center/details/group/:id',component:CenterDetailsGroupComponent},
  {path:'center/add/report',component:AddReportComponent},
  {path:'center/list/report',component:ListReportComponent},
  {path:'center/edit/report',component:UpdateReportComponent},
  {path:'center/send/report',component:SendReportComponent},
  {path:'center/details/report',component:DetailsReportComponent},
  {path:'center/update/:id',component:CenterUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
