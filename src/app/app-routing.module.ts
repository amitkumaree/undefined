import { TeacherRoleDetailsComponent } from './teacher-role-details/teacher-role-details.component';
import { ClassSubjectNewComponent } from './class-subject-new/class-subject-new.component';
import { ClasssubjectComponent } from './classsubject/classsubject.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassComponent } from './class/class.component';
import { AcpComponent } from './acp/acp.component';
import { ClasssectionComponent } from './classsection/classsection.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { ClassSubjectForExamSetupScreenComponent } from './class-subject-for-exam-setup-screen/class-subject-for-exam-setup-screen.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'syllabus', component: SyllabusComponent },
  // { path: 'subject', component: SubjectComponent },
  { path: 'subject', component: ClassSubjectNewComponent },
  { path: 'class', component: ClassComponent },
  { path: 'classSub', component: ClasssubjectComponent },
  { path: 'acp', component: AcpComponent },
  { path: 'classSec', component: ClasssectionComponent },
  { path: 'sm', component: StudentManagementComponent },
  { path: 'tm', component: TeacherManagementComponent },
  { path: 'trd', component: TeacherRoleDetailsComponent },
  { path: 'csfess', component: ClassSubjectForExamSetupScreenComponent },
  { path: 'na', component: PageUnderConstructionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
