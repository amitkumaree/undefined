import { TeacherRoleDtlVM } from './../Models/TeacherRoleDtlVM';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeacherRoleDetailsModalComponent } from './modal/teacher-role-details-modal/teacher-role-details-modal.component';
import { TeacherRoleDtl } from '../Models/TeacherRoleDtl';

@Component({
  selector: 'app-teacher-role-details',
  templateUrl: './teacher-role-details.component.html',
  styleUrls: ['./teacher-role-details.component.css'],
  providers: [Configuration, RestService]
})
export class TeacherRoleDetailsComponent implements OnInit {
  spinner = false;
  teacherRoleDtls: TeacherRoleDtlVM[] = [];
  constructor(private svc: RestService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getteacherRoleDtls();
  }
  private getteacherRoleDtls(): void {
    this.spinner = true;
    this.svc.getAll<TeacherRoleDtlVM[]>('TeacherRoleDtls').subscribe(
      res => {
        this.teacherRoleDtls = res;
        this.spinner = false;
      },
      err => { this.spinner = false; }
    );
  }
  oneditClick(editTeacherRoleDtl: TeacherRoleDtlVM) {
    editTeacherRoleDtl.operation = 'Edit';
    this.openModal(editTeacherRoleDtl);
  }
  ondeleteClick(delTeacherRoleDtlVM: TeacherRoleDtlVM) {
    delTeacherRoleDtlVM.operation = 'Delete';
    this.openModal(delTeacherRoleDtlVM);
  }

  public onAddClick(): void {
    const _teacherRoleDtl = new TeacherRoleDtlVM();
    _teacherRoleDtl.operation = 'Add';
    this.openModal(_teacherRoleDtl);
  }

  openModal(_teacherRoleDtl: TeacherRoleDtlVM) {
    const modalRef = this.modalService.open(TeacherRoleDetailsModalComponent);
    modalRef.componentInstance.teacherRoleDtl = _teacherRoleDtl;
    // modalRef.componentInstance.teacherRoleDtls = this.teacherRoleDtls;
    // modalRef.componentInstance.students = this.teacherRoleDtls;

    modalRef.result.then((data) => {
      if (data as TeacherRoleDtlVM) {
        this.spinner = true;
        debugger;
        let tchRoldDtl = new TeacherRoleDtl();
        tchRoldDtl = data.TeacherRoleDtl;
        tchRoldDtl.operation = data.operation;
        this.svc.addUpdDel('TeacherRoleDtls', tchRoldDtl).subscribe(
          res => {
            debugger;
            this.spinner = false;
            if ('Add' === data.operation ||
              'Delete' === data.operation) {
              this.getteacherRoleDtls();
            }

          },
          err => { this.spinner = false; debugger; }
        );
      }
      console.log(data);
    }, (reason) => { });
  }
}
