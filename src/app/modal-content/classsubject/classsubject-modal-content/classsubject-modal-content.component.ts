import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-classsubject-modal-content',
  templateUrl: './classsubject-modal-content.component.html',
  styleUrls: ['./classsubject-modal-content.component.css']
})
export class ClasssubjectModalContentComponent implements OnInit {

  @Input() public classsubject;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.classsubject)
  }

  close(): void {
    this.activeModal.close(this.classsubject);
  }

  cancel(): void {
    this.activeModal.close();
  }

}
