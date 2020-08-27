import { ClassSection } from './../Models/classsection';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClasssectionModalContentComponent } from '../modal-content/classsection/classsection-modal-content/classsection-modal-content.component';
import { Class } from '../Models/class';
@Component({
  selector: 'app-classsection',
  templateUrl: './classsection.component.html',
  styleUrls: ['./classsection.component.css'],
  providers: [Configuration, RestService]
})
export class ClasssectionComponent implements OnInit {
  classsections: ClassSection[] = [];
  spinner = false;
  closeResult: string;
  classes: Class[] = [];
  showAdd = false;

  constructor(private svc: RestService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getClassSection();
  }
  private getClassSection(): void {
    debugger;
    this.spinner = true;
    this.svc.getAll<ClassSection[]>('ClassSection').subscribe(
      res => {
        console.log(res);
        this.classsections = res;
        this.spinner = false;
        this.classsections.forEach(element => {
          this.svc.getAll<Class[]>('Class').subscribe(
            cRes => {
              this.classes = cRes;
              this.classes.filter(e=>e.class_id === element.class_id);
              element.class_id = this.classes.filter(e=>e.class_id === element.class_id)[0].class_id;
              element.class_name = this.classes.filter(e=>e.class_id === element.class_id)[0].class_name;
              element.classes = this.classes;
            },
            cErr => {}
        );
        
      });
      
    },
    err => {this.spinner = false;}
    );
  }
  public oneditClick(classsection: ClassSection): void {
    classsection.operation = 'Edit';
    classsection.classes = this.classes;
    // this.svc.getAll<Class[]>('Class').subscribe(
    //   cRes => {
    //     classsection.classes = cRes;
    //   },
    //   err => {}
    
    // );
    this.openModal(classsection);

  }
  public onAddClick(): void {
    debugger;
    const classsection = new ClassSection();
    classsection.operation = 'Add';
    classsection.classes = this.classes;
    this.showAdd = true;
    this.openModal(classsection);
  }
  public ondeleteClick(classsection: ClassSection): void {
    classsection.operation = 'Delete';
    classsection.del_flg = 'Y';
    //this.openModal(classsubject);
    this.spinner = true;
    this.svc.addUpdDel('ClassSection',classsection).subscribe(
    res => {this.spinner = false;
         this.getClassSection();
       },
       err => {this.spinner = false;}
     );
  }
  
  public onSave(): void {
    debugger;
    this.showAdd = true;
    //this.selected;

    var data = new ClassSection();

    // data.class_id=this.selected._class;
    // data.subject_id=this.selected.subject;
    // data.academic_year = this.selected.academicyear;

    this.svc.add('ClassSection', data).subscribe(
      res => { this.spinner = false;
              
        this.getClassSection();
    

      },

      err => {this.spinner = false;}
    );
    
  }
  openModal(classsection: ClassSection) {
    debugger;
    const modalRef = this.modalService.open(ClasssectionModalContentComponent);
    modalRef.componentInstance.class = classsection;

    modalRef.result.then((data) => {
      if (data as ClassSection) {
        this.spinner = true;

        this.svc.addUpdDel('ClassSection', data).subscribe(
          res => { this.spinner = false;
                   if('Add' === data.operation ||
            'Delete' === data.operation)
          {
            this.getClassSection();
          }

          },

          err => {this.spinner = false;}
        );
      }
      console.log(data);
    }, (reason) => {});
  }
}
