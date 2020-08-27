import { TeacherModalComponent } from './modal/teacher-modal/teacher-modal.component';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeacherMstr } from '../Models/teacherMstr';
import { Configuration } from '../app.constant';

@Component({
  selector: 'app-teacher-management',
  templateUrl: './teacher-management.component.html',
  styleUrls: ['./teacher-management.component.css'],
  providers: [Configuration, RestService]
})
export class TeacherManagementComponent implements OnInit {
  spinner = false;
  teachers: TeacherMstr[] = [];
  filterTeacher = '';
  constructor(private svc: RestService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers(): void {
    this.spinner = true;
    this.svc.getAll<TeacherMstr[]>('TeacherMstr').subscribe(
      res => {
        this.teachers = res;
        this.spinner = false;
      },
      err => { this.spinner = false; }
    );
  }
  oneditClick(editTeacher: TeacherMstr) {
    editTeacher.operation = 'Edit';
    this.openModal(editTeacher);
  }
  ondeleteClick(delTeacher: TeacherMstr) {
    delTeacher.operation = 'Delete';
    this.openModal(delTeacher);
  }

  public onAddClick(): void {
    const _teacher = new TeacherMstr();
    _teacher.operation = 'Add';
    this.openModal(_teacher);
  }

  openModal(_teacher: TeacherMstr) {
    const modalRef = this.modalService.open(TeacherModalComponent);
    modalRef.componentInstance.teacher = _teacher;

    modalRef.result.then((data) => {
      if (data as TeacherMstr) {
        this.spinner = true;
        this.svc.addUpdDel('TeacherMstr', data).subscribe(
          res => {
            this.spinner = false;
            if ('Add' === data.operation ||
              'Delete' === data.operation) {
              this.getTeachers();
            }

          },
          err => { this.spinner = false; }
        );
      }
      console.log(data);
    }, (reason) => { });
  }
}
