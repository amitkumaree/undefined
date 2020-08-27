import { Component, OnInit } from '@angular/core';
import { ACP } from './../Models/acp';
import { RestService } from '../rest.service';
import { Configuration } from '../app.constant';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AcpModalContentComponent } from "../modal-content/acp/acp-modal-content/acp-modal-content.component";

@Component({
  selector: 'app-acp',
  templateUrl: './acp.component.html',
  styleUrls: ['./acp.component.css'],
  providers: [Configuration, RestService]
})
export class AcpComponent implements OnInit {
  acps: ACP[] = [];
  spinner = false;
  // closeResult: string;
  monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
  
  constructor(private svc: RestService,
  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAcp();
    
  }

  private getAcp(): void {
    this.spinner = true;
    this.svc.getAll<ACP[]>('ACP').subscribe(
      res => {
        this.acps = res;
        this.spinner = false;
      this.acps.forEach(element => {
        element.month_name = this.monthNames[element.month_id - 1];
      });
      },
      err => {this.spinner = false;}
    );
  }
  public oneditClick(acp: ACP): void {
    acp.operation = 'Edit';
    this.openModal(acp);

  }
  public ondeleteClick(acp: ACP): void {
    acp.operation = 'Delete';
    acp.del_flg = 'Y';
    this.spinner = true;
    this.svc.addUpdDel('ACP',acp).subscribe(
      res => {this.spinner = false;
        this.getAcp();
        
      },
      err => {this.spinner = false;}
    );
  }
  public onAddClick(): void {
    debugger;
    const acp = new ACP();
    acp.operation = 'Add';
    this.openModal(acp);
  }

  openModal(acp: ACP) {
    debugger;
    const modalRef = this.modalService.open(AcpModalContentComponent);
    modalRef.componentInstance.class = acp;

    modalRef.result.then((acp) => {
      debugger;
      if (acp as ACP) {
        this.spinner = true;
        this.svc.addUpdDel('ACP', acp).subscribe(
          res => { this.spinner = false;
            if('Add' === acp.operation ||
                  'Delete' === acp.operation)
          {
            this.getAcp();
          }

          },
          err => {this.spinner = false;}
        );
      }
      console.log(acp);
    }, (reason) => {});
  }



}
