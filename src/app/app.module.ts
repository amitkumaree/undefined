import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { TopicComponent } from './topic/topic.component';
import { SubTopicComponent } from './sub-topic/sub-topic.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { SubjectComponent } from './subject/subject.component';
import { ClassComponent } from './class/class.component';
import { SubjectModalContentComponent } from './modal-content/subject/subject-modal-content/subject-modal-content.component';
import { ClassModalContentComponent } from './modal-content/class/class-modal-content/class-modal-content.component';
import { PageUnderConstructionComponent } from './page-under-construction/page-under-construction.component';
import { ClasssubjectComponent } from './classsubject/classsubject.component';
import { ClasssubjectModalContentComponent } from './modal-content/classsubject/classsubject-modal-content/classsubject-modal-content.component';
import { AcpComponent } from './acp/acp.component';
import { AcpModalContentComponent } from "./modal-content/acp/acp-modal-content/acp-modal-content.component";
import { ClasssectionComponent } from './classsection/classsection.component';
import { ClasssectionModalContentComponent } from './modal-content/classsection/classsection-modal-content/classsection-modal-content.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { TeacherModalComponent } from './teacher-management/modal/teacher-modal/teacher-modal.component';
import { StudentModalComponent } from './student-management/modal/student-modal/student-modal.component';
import { ClassSubjectNewComponent } from './class-subject-new/class-subject-new.component';
import { ClassSubjectModalComponent } from './class-subject-new/modal/class-subject-modal/class-subject-modal.component';
import { TeacherRoleDetailsComponent } from './teacher-role-details/teacher-role-details.component';
import { TeacherRoleDetailsModalComponent } from './teacher-role-details/modal/teacher-role-details-modal/teacher-role-details-modal.component';
import { ClassSubjectForExamSetupScreenComponent } from './class-subject-for-exam-setup-screen/class-subject-for-exam-setup-screen.component';
import { StudentMstrPipe, TeacherMstrPipe } from './callback.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    SyllabusComponent,
    TopicComponent,
    SubTopicComponent,
    ModalContentComponent,
    SubjectComponent,
    ClassComponent,
    SubjectModalContentComponent,
    ClassModalContentComponent,
    PageUnderConstructionComponent,
    ClasssubjectComponent,
    ClasssubjectModalContentComponent,
    AcpComponent,
    AcpModalContentComponent,
    ClasssectionComponent,
    ClasssectionModalContentComponent,
    StudentManagementComponent,
    TeacherManagementComponent,
    TeacherModalComponent,
    StudentModalComponent,
    ClassSubjectNewComponent,
    ClassSubjectModalComponent,
    TeacherRoleDetailsComponent,
    TeacherRoleDetailsModalComponent,
    ClassSubjectForExamSetupScreenComponent,
    StudentMstrPipe, TeacherMstrPipe

  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule,
    AppRoutingModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
