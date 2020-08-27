import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-class-modal-content',
  templateUrl: './class-modal-content.component.html',
  styleUrls: ['./class-modal-content.component.css']
})
export class ClassModalContentComponent implements OnInit {
  @Input() public class;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.class)
  }

  close(): void {
    this.activeModal.close(this.class);
  }

  cancel(): void {
    this.activeModal.close();
  }
}
