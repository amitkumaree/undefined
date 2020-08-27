import { ClassSubjectModalComponent } from './modal/class-subject-modal/class-subject-modal.component';
import { Cls_Subject } from './../Models/classsubject';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';

@Component({
  selector: 'app-class-subject-new',
  templateUrl: './class-subject-new.component.html',
  styleUrls: ['./class-subject-new.component.css'],
  providers: [Configuration, RestService]
})
export class ClassSubjectNewComponent implements OnInit {
  spinner = false;
  clsSubjects: Cls_Subject[] = [];
  constructor(private svc: RestService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getClsSubject();
  }

  private getClsSubject(): void {
    this.spinner = true;
    this.svc.getAll<Cls_Subject[]>('ClassSubject').subscribe(
      res => {
        this.clsSubjects = res;
        this.spinner = false;
      },
      err => { this.spinner = false; }
    );
  }
  oneditClick(editclsSubject: Cls_Subject) {
    debugger;
    editclsSubject.operation = 'Edit';
    this.openModal(editclsSubject);
  }
  ondeleteClick(delStudent: Cls_Subject) {
    delStudent.operation = 'Delete';
    this.openModal(delStudent);
  }

  public onAddClick(): void {
    const _clsSubject = new Cls_Subject();
    _clsSubject.operation = 'Add';
    this.openModal(_clsSubject);
  }

  openModal(_clsSubject: Cls_Subject) {
    const modalRef = this.modalService.open(ClassSubjectModalComponent);
    modalRef.componentInstance.classSubject = _clsSubject;
    modalRef.componentInstance.classSubjects = this.clsSubjects;

    modalRef.result.then((data) => {
      if (data as Cls_Subject) {
        this.spinner = true;
        this.svc.addUpdDel('ClassSubject', data).subscribe(
          res => {
            this.spinner = false;
            if ('Add' === data.operation ||
              'Delete' === data.operation) {
              this.getClsSubject();
            }

          },
          err => { this.spinner = false; }
        );
      }
      console.log(data);
    }, (reason) => { });
  }
}
