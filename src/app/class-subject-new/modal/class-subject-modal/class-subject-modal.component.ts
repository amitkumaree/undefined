import { Cls_Subject } from './../../../Models/classsubject';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-class-subject-modal',
  templateUrl: './class-subject-modal.component.html',
  styleUrls: ['./class-subject-modal.component.css']
})
export class ClassSubjectModalComponent implements OnInit {
  @Input() public classSubject: Cls_Subject;
  @Input() public classSubjects: Cls_Subject[] = [];
  classes: string[] = [];
  isError = false;
  form: FormGroup;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.form = this.formBuilder.group({
      className: ['', Validators.required],
      classStandard: ['', Validators.required],
    });
    this.getAllClass()
  }

  close(): void {
    debugger;
    if (this.classSubject.operation === 'Add') {
      this.isError = false;
      // duplicate check
      if (this.isClassSubjectAlreadyAvailable(this.classSubject)) {
        // Do nothing Raise duplicate entry error.
        this.isError = true;
      } else {
        this.activeModal.close(this.classSubject);
      }
    } else { this.activeModal.close(this.classSubject); }
  }

  /** true means data already available */
  isClassSubjectAlreadyAvailable(check: Cls_Subject): boolean {
    const isCheckPresent = this.classSubjects.filter(e => e.CLASS === check.CLASS && e.SUBJECT === check.SUBJECT);
    if (null !== isCheckPresent && isCheckPresent.length > 0) { return true; } else { return false; }
  }

  cancel(): void {
    this.activeModal.close();
  }

  getAllClass(): void {
    this.classSubjects.forEach(element => {
      if (this.classes.indexOf(element.CLASS) === -1) {
        this.classes.push(element.CLASS);
      }
    });
  }
}
