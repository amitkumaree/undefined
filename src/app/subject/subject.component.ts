import { Subject } from './../Models/subject';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SubjectModalContentComponent } from '../modal-content/subject/subject-modal-content/subject-modal-content.component';


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
  providers: [Configuration, RestService]
})
export class SubjectComponent implements OnInit {

  subjects: Subject[] = [];
  spinner = false;
  closeResult: string;
  constructor(private svc: RestService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSubject();
  }

  private getSubject(): void {
    this.spinner = true;
    this.svc.getAll<Subject[]>('Subject').subscribe(
      res => {
        this.subjects = res;
        this.spinner = false;
      },
      err => { this.spinner = false; }
    );
  }
  public oneditClick(subject: Subject): void {
    subject.operation = 'Edit';
    this.openModal(subject);

  }
  public ondeleteClick(subject: Subject): void {
    subject.operation = 'Delete';
    subject.del_flg = 'Y';
    this.spinner = true;
    this.svc.addUpdDel('Subject', subject).subscribe(
      res => { this.spinner = false; 
        this.getSubject();
      
      },
      err => { this.spinner = false; }
    );
  }
  public onAddClick(): void {
    const subject = new Subject();
    subject.operation = 'Add';
    this.openModal(subject);
  }

  openModal(subject: Subject) {
    const modalRef = this.modalService.open(SubjectModalContentComponent);
    modalRef.componentInstance.subject = subject;

    modalRef.result.then((data) => {
      if (data as Subject) {
        this.spinner = true;
        this.svc.addUpdDel('Subject', data).subscribe(
          res => { this.spinner = false;
            if('Add' === data.operation ||
                  'Delete' === data.operation)
          {
            this.getSubject();
          }
          
          },
          err => { this.spinner = false; }
        );
      }
      console.log(data);
    }, (reason) => { });
  }
}
