import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acp-modal-content',
  templateUrl: './acp-modal-content.component.html',
  styleUrls: ['./acp-modal-content.component.css']
})
export class AcpModalContentComponent implements OnInit {
  @Input() public class;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    debugger;
    console.log(this.class)
  }

  close(): void {
    this.activeModal.close(this.class);
  }

  cancel(): void {
    this.activeModal.close();
  }

}
