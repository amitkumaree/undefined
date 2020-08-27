import { Class } from './../Models/class';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClassModalContentComponent } from '../modal-content/class/class-modal-content/class-modal-content.component';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [Configuration, RestService]
})
export class ClassComponent implements OnInit {
  classes: Class[] = [];
  spinner = false;
  closeResult: string;

  constructor(private svc: RestService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getClass();
  }

  private getClass(): void {
    this.spinner = true;
    this.svc.getAll<Class[]>('Class').subscribe(
      res => {
        this.classes = res;
        this.spinner = false;
      },
      err => {this.spinner = false;}
    );
  }
  public oneditClick(_class: Class): void {
    _class.operation = 'Edit';
    this.openModal(_class);

  }
  public ondeleteClick(_class: Class): void {
    _class.operation = 'Delete';
    _class.del_flg = 'Y';
    this.spinner = true;
    this.svc.addUpdDel('Class',_class).subscribe(
      res => {this.spinner = false;
        this.getClass();
      
      },
      err => {this.spinner = false;}
    );
  }
  public onAddClick(): void {
    const _class = new Class();
    _class.operation = 'Add';
    this.openModal(_class);
  }

  openModal(_class: Class) {
    const modalRef = this.modalService.open(ClassModalContentComponent);
    modalRef.componentInstance.class = _class;

    modalRef.result.then((data) => {
      if (data as Class) {
        this.spinner = true;
        this.svc.addUpdDel('Class', data).subscribe(
          res => { this.spinner = false;
            if('Add' === data.operation ||
                  'Delete' === data.operation)
          {
            this.getClass();
          }

          },
          err => {this.spinner = false;}
        );
      }
      console.log(data);
    }, (reason) => {});
  }


}
