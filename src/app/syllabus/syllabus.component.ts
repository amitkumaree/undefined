import { Subject } from './../Models/subject';
import { Class } from './../Models/class';
import { SyllabusClassSubjectVM } from './../Models/syllabusClassSubVM';
import { Syllabus } from './../Models/syllabus';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { AlertMessage } from '../Models/message';
import { ClassSubject } from '../Models/classsubject';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css'],
  providers: [Configuration, RestService]
})
export class SyllabusComponent implements OnInit {
  message: AlertMessage;
  syllabuses: Syllabus[] = [];
  syllabusClassSubjectVMs: SyllabusClassSubjectVM[] = [];
  spinner = false;
  closeResult: string;
  constructor(private svc: RestService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getSyllabus();
  }

  private getSyllabus(): void {
    this.spinner = true;
    this.svc.getAll<Syllabus[]>('Syllabus').subscribe(
      res => {
        this.syllabuses = res;
        this.svc.getAll<Class[]>('Class').subscribe(
          classRes => {
            this.svc.getAll<Subject[]>('Subject').subscribe(
              subRes => {
                this.svc.getAll<ClassSubject[]>('ClassSubject').subscribe(
                  csRes => {
                    res.forEach(element => {
                      const getClassSub = csRes.filter(x => x.c_s_id === element.c_s_id)[0];
                      const subjectDtl = subRes.filter(x => x.subject_id === getClassSub.subject_id)[0];
                      const classDtl = classRes.filter(x => x.class_id === getClassSub.class_id)[0];
                      const vm = new SyllabusClassSubjectVM();
                      vm.ClassName = classDtl.class_name;
                      vm.SubjectName = subjectDtl.subject_name;
                      vm.Syllabus = element;
                      this.syllabusClassSubjectVMs.push(vm);
                    });
                  },
                  csErr => {}
                );
              },
              subErr => {}
            );
          },
          classErr => {}
        );
        this.spinner = false;
      },
      err => {this.spinner = false;}
    );
  }

  public oneditClick(syllubus: SyllabusClassSubjectVM): void {
    syllubus.Syllabus.operation = 'Edit';
    this.openModal(syllubus);

  }
  public ondeleteClick(syllubus: SyllabusClassSubjectVM): void {
    syllubus.Syllabus.operation = 'Delete';
    syllubus.Syllabus.del_flg = 'Y';
    this.openModal(syllubus);
  }
  public onAddClick(): void {
    const syllabus = new SyllabusClassSubjectVM();
    syllabus.Syllabus.operation = 'Add';
    this.openModal(syllabus);
  }

  openModal(syllubus: SyllabusClassSubjectVM) {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.syllabus = syllubus;

    this.message = new AlertMessage();
    modalRef.result.then((data) => {
      if (data as SyllabusClassSubjectVM) {
        this.spinner = true;
        this.svc.addUpdDel('Syllabus', data.Syllabus).subscribe(
          res => {
            this.message.messageType = 'success';
            this.message.message = data.operation + ' sucessfull';
            this.spinner = false;
            if (data.operation === 'Add' ||
                data.operation === 'Delete') {
              this.getSyllabus();
            }
          },
          err => {
            this.spinner = false;
            this.message.messageType = 'error';
            this.message.message = data.operation + ' un-sucessfull';
          }
        );
      }
      // console.log(data);
    }, (reason) => {});
  }
}
