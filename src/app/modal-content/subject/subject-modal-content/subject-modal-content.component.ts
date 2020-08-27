import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subject-modal-content',
  templateUrl: './subject-modal-content.component.html',
  styleUrls: ['./subject-modal-content.component.css']
})
export class SubjectModalContentComponent implements OnInit {
   @Input() public subject;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.subject)
  }

  close(): void {
    this.activeModal.close(this.subject);
  }

  cancel(): void {
    this.activeModal.close();
  }

}
