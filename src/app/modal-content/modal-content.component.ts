
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() public syllabus;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    // console.log(this.syllabus)
  }

  close(): void {
    this.activeModal.close(this.syllabus);
  }

  cancel(): void {
    this.activeModal.close();
  }

}
