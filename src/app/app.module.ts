import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { BlogComponent } from './shared/blog/blog.component';
import { ContactComponent } from './shared/contact/contact.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TeacherNavComponent } from './teacher/_core/teacher-nav/teacher-nav.component';
import { TeacherRegisterComponent } from './teacher/componentes/teacher-register/teacher-register.component';
import { TeacherProfileComponent } from './teacher/componentes/teacherProfile/teacher-profile/teacher-profile.component';
import { ListTeacherLinksComponent } from './teacher/componentes/teacherProfile/list-teacher-links/list-teacher-links.component';
import { AddTeacherSchoolComponent } from './teacher/componentes/teacherProfile/teacherSchool/add-teacher-school/add-teacher-school.component';
import { ListTeacherSchoolComponent } from './teacher/componentes/teacherProfile/teacherSchool/list-teacher-school/list-teacher-school.component';
import { AddTeacherExperienceComponent } from './teacher/componentes/teacherProfile/teacherExperience/add-teacher-experience/add-teacher-experience.component';
import { ListTeacherExperienceComponent } from './teacher/componentes/teacherProfile/teacherExperience/list-teacher-experience/list-teacher-experience.component';
import { AddTeacherEducationComponent } from './teacher/componentes/teacherProfile/teacherEducation/add-teacher-education/add-teacher-education.component';
import { ListTeacherEducationComponent } from './teacher/componentes/teacherProfile/teacherEducation/list-teacher-education/list-teacher-education.component';
import { ListTeacherSubjectComponent } from './teacher/componentes/teacherProfile/teacherSubject/list-teacher-subject/list-teacher-subject.component';
import { ListGroupComponent } from './teacher/componentes/teacherGroup/list-group/list-group.component';

import { EditGroupComponent } from './teacher/componentes/teacherGroup/edit-group/edit-group.component';
import { DetailsGroupComponent } from './teacher/componentes/teacherGroup/details-group/details-group.component';
import { NavbarHeaderComponent } from './_core/header/homeheader/navbar-header/navbar-header.component';
import { LoginComponent } from './shared/login/login.component';
import { TeacherBioComponent } from './teacher/componentes/teacherProfile/teacher-bio/teacher-bio.component';
import { AddTeacherSubjectComponent } from './teacher/componentes/teacherProfile/teacherSubject/add-teacher-subject/add-teacher-subject.component'; 
import { AddGroupComponent } from './teacher/componentes/teacherGroup/add-group/add-group.component';
import { UserFooterComponent } from './_core/user-footer/user-footer.component';
import { AddReportComponent } from './report/componentes/add-report/add-report.component';
import { ListReportComponent } from './report/componentes/list-report/list-report.component';
import { UpdateReportComponent } from './report/componentes/update-report/update-report.component';
import { DetailsReportComponent } from './report/componentes/details-report/details-report.component';
import { DeleteReportComponent } from './report/componentes/delete-report/delete-report.component';
import { SendReportComponent } from './report/componentes/send-report/send-report.component';
import { AllteacherComponent } from './shared/allteacher/allteacher.component';
import { RegisterComponent } from './parent/register/register.component';
import { ParentBioComponent } from './parent/profile/parent-bio/parent-bio.component';
import { ListStudentComponent } from './parent/profile/student/list-student/list-student.component';
import { AddStudentComponent } from './parent/profile/student/add-student/add-student.component';
import { ParentProfileComponent } from './parent/profile/parent-profile/parent-profile.component';
import { StudentProfileComponent } from './parent/profile/student/list-student/profile-student/student-profile/student-profile.component';
import { StudentBioComponent } from './parent/profile/student/list-student/profile-student/student-bio/student-bio.component';
import { ListCoursesComponent } from './parent/profile/student/list-student/profile-student/listCourses/list-courses/list-courses.component';
import { DetailsComponent } from './parent/profile/student/list-student/profile-student/listCourses/Details/details/details.component';
import { CourseDetailsComponent } from './parent/profile/student/list-student/profile-student/listCourses/Details/course-details/course-details.component';
import { ReportComponent } from './parent/profile/student/list-student/profile-student/listCourses/Report/report/report.component';
import { ShowReportComponent } from './parent/profile/student/list-student/profile-student/listCourses/Report/show-report/show-report.component';
import { SearchComponent } from './shared/search/search.component';
import { JoinGroupComponent } from './parent/profile/student/join-group/join-group.component';
import { SubjectSchuleComponent } from './parent/profile/student/list-student/subject-schule/subject-schule.component';
import {UpdateStudentComponent} from './parent/profile/student/update-student/update-student.component';
import {FooterCoreComponent} from'./_core/userFooter/footer.component';
// import {ParentBioComponent} from'./parent/profile/parent-bio/parent-bio.component';
import { from } from 'rxjs';
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
import { ParentNavComponent } from './parent/_core/parent-nav/parent-nav.component';
import { ParentUpdateComponent } from './parent/parent-update/parent-update.component';
import { TopComponent } from './shared/top/top.component';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material';
import { TeacherSchoolService } from './teacher/_services/teacher-school.service';



// import {DataTableModule} from 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    TeacherNavComponent,
    TeacherRegisterComponent,
    TeacherProfileComponent,

    ListTeacherLinksComponent,
    AddTeacherSchoolComponent,
    ListTeacherSchoolComponent,
    AddTeacherExperienceComponent,
    ListTeacherExperienceComponent,
    AddTeacherEducationComponent,
    ListTeacherEducationComponent,
    ListTeacherSubjectComponent,
    ListGroupComponent,
    EditGroupComponent,
    DetailsGroupComponent,
    NavbarHeaderComponent,
    LoginComponent,
    TeacherBioComponent,
    AddTeacherSubjectComponent,
    AddGroupComponent,
    UserFooterComponent,
    AddReportComponent,
    ListReportComponent,
    UpdateReportComponent,
    DetailsReportComponent,
    DeleteReportComponent,
    SendReportComponent,
    AllteacherComponent,
    /////////////
    FooterComponent,
    RegisterComponent,
    NavbarHeaderComponent,
    ParentBioComponent,
    ListStudentComponent,
    AddStudentComponent,
    ParentProfileComponent,
    // FooterCoreComponent,
    StudentProfileComponent,
    StudentBioComponent,
    ListCoursesComponent,
    DetailsComponent,
    TeacherBioComponent,
    CourseDetailsComponent,
    ReportComponent,
    ShowReportComponent,
    SearchComponent,
    JoinGroupComponent,
    SubjectSchuleComponent,
    UpdateStudentComponent,
    FooterCoreComponent,
    CenterNavComponent,
    CenterRegisterComponent,
    CenterBioComponent,
    CenterLinksComponent,
    CenterListTeacherComponent,
    CenterListSubjectComponent,
    CenterProfileComponent,
    CenterAddGroupComponent,
    CenterDetailsGroupComponent,
    CenterEditGroupComponent,
    CenterListGroupComponent,
    TeacherUpdateComponent,
    CenterUpdateComponent,
    ParentNavComponent,
    ParentUpdateComponent,
    TopComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
   
  ],
  providers: [TeacherSchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
