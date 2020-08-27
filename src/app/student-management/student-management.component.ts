import { StudentMstr } from './../Models/StudentMstr';
import { StudentModalComponent } from './modal/student-modal/student-modal.component';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Configuration } from '../app.constant';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css'],
  providers: [Configuration, RestService]
})
export class StudentManagementComponent implements OnInit {
  spinner = false;
  students: StudentMstr[] = [];
  studentToShow: StudentMstr[] = [];
  filterStudent: '';
  showDeletedStudent = false;
  constructor(private svc: RestService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(): void {
    this.spinner = true;
    this.svc.getAll<StudentMstr[]>('StudentMstr').subscribe(
      res => {
        this.students = res;
        this.whichStudentToShow();
        this.spinner = false;
      },
      err => { this.spinner = false; }
    );
  }

  private whichStudentToShow(): void {
    if (this.showDeletedStudent) {
      this.studentToShow = this.students.filter(e => e.DateOfBirth === null);
    } else {
      this.studentToShow = this.students.filter(e => e.DateOfBirth !== null);
    }
  }

  showDeletedToggle(event: any): void {
    debugger;
    this.showDeletedStudent = event.target.checked;
    this.whichStudentToShow();
  }

  oneditClick(editStudent: StudentMstr) {
    debugger;
    if (editStudent.DateOfBirth === null) {
      editStudent.operation = 'ReActivate';
    } else {
      editStudent.operation = 'Edit';
    }
    this.openModal(editStudent);
  }
  ondeleteClick(delStudent: StudentMstr) {
    delStudent.operation = 'Delete';
    this.openModal(delStudent);
  }

  public onAddClick(): void {
    const _student = new StudentMstr();
    _student.operation = 'Add';
    this.openModal(_student);
  }

  openModal(_student: StudentMstr) {
    const modalRef = this.modalService.open(StudentModalComponent);
    modalRef.componentInstance.student = _student;
    modalRef.componentInstance.students = this.students;
    modalRef.result.then((data) => {
      if (data as StudentMstr) {
        this.spinner = true;
        this.svc.addUpdDel('StudentMstr', data).subscribe(
          res => {
            this.spinner = false;
            if ('Add' === data.operation ||
              'Delete' === data.operation ||
              'ReActivate' === data.operation) {
              this.getStudents();
            }

          },
          err => { this.spinner = false; }
        );
      }
      console.log(data);
    }, (reason) => { });
  }
}
