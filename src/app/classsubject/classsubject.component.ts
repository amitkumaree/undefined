import { Subject } from './../Models/subject';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClasssubjectModalContentComponent } from '../modal-content/classsubject/classsubject-modal-content/classsubject-modal-content.component';
import { ClassSubject } from '../Models/classsubject';
import { Class } from '../Models/class';

@Component({
  selector: 'app-classsubject',
  templateUrl: './classsubject.component.html',
  styleUrls: ['./classsubject.component.css'],
  providers: [Configuration, RestService]
})
export class ClasssubjectComponent implements OnInit {
  classsubjects: ClassSubject[] = [];
  spinner = false;
  closeResult: string;
  classes: Class[] = [];
  subjects: Subject[] = [];
  showAdd = false;

  selected = {
    _class: null,
    subject: null,
    academicyear: null
  };
  constructor(private svc: RestService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getClassSubject();
  }
  private getClassSubject(): void {
    debugger;
    this.spinner = true;
    this.svc.getAll<ClassSubject[]>('ClassSubject').subscribe(
      res => {
        console.log(res);
        this.classsubjects = res;

        this.spinner = false;
        this.svc.getAll<Class[]>('Class').subscribe(
          cRes => {
            this.classes = cRes;
            this.svc.getAll<Subject[]>('Subject').subscribe(
              sRes => {
                this.subjects = sRes;
                res.forEach(element => {
                  const clDtl = cRes.filter(x => x.class_id === element.class_id)[0];
                  const sDtl = sRes.filter(x => x.subject_id === element.subject_id)[0];
                  element.class_name = clDtl.class_name;
                  element.subject_name = sDtl.subject_name;
                });
              },
              sErr => {}
            );
          },
          cErr => {}
        );
      },
      err => {this.spinner = false;}
    );
  }
  public oneditClick(classsubject: ClassSubject): void {
    classsubject.operation = 'Edit';
    this.openModal(classsubject);

  }
  public ondeleteClick(classsubject: ClassSubject): void {
    classsubject.operation = 'Delete';
    classsubject.del_flg = 'Y';
    //this.openModal(classsubject);
    this.spinner = true;
    this.svc.addUpdDel('ClassSubject',classsubject).subscribe(
    res => {this.spinner = false;
         this.getClassSubject();
       },
       err => {this.spinner = false;}
     );
  }
  public onAddClick(): void {
    this.showAdd = true;
  }
  public onSave(): void {
    debugger;
    this.showAdd = true;
    this.selected;

    var data = new ClassSubject();

    data.class_id=this.selected._class;
    data.subject_id=this.selected.subject;
    data.academic_year = this.selected.academicyear;

    this.svc.add('ClassSubject', data).subscribe(
      res => { this.spinner = false;
              
        this.getClassSubject();
    

      },

      err => {this.spinner = false;}
    );
    
  }
  openModal(classsubject: ClassSubject) {
    const modalRef = this.modalService.open(ClasssubjectModalContentComponent);
    modalRef.componentInstance.class = classsubject;

    modalRef.result.then((data) => {
      if (data as ClassSubject) {
        this.spinner = true;

        this.svc.addUpdDel('ClassSubject', data).subscribe(
          res => { this.spinner = false;
                   if('Add' === data.operation ||
            'Delete' === data.operation)
          {
            this.getClassSubject();
          }

          },

          err => {this.spinner = false;}
        );
      }
      console.log(data);
    }, (reason) => {});
  }
  // private getClassName(id)
  // {
  //   //getHero(id: number): Observable<Hero> {
  //     const url = `${this.heroesUrl}/${id}`;
  //     return this.http.get<Hero>(url).pipe(
  //       tap(_ => this.log(`fetched hero id=${id}`)),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  //   //}
  // }
}
