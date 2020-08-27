import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-classsection-modal-content',
  templateUrl: './classsection-modal-content.component.html',
  styleUrls: ['./classsection-modal-content.component.css']
})
export class ClasssectionModalContentComponent implements OnInit {

  @Input() public class;
  //public classes: Class[] = [];
  
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
