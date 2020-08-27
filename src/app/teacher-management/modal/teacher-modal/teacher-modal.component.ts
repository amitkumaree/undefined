import { TeacherMstr } from './../../../Models/teacherMstr';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.css']
})
export class TeacherModalComponent implements OnInit {
  @Input() public teacher: TeacherMstr;
  disableSave = false;
  teacherMstForm: FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.teacherMstForm = this.formBuilder.group({
      TeacherName: ['', Validators.required],
      LoginID: [''],
      IsAdmin: ['', Validators.required]
    });
    this.checkIfdataExistsToSave()
  }
  get f() { return this.teacherMstForm.controls; }

  checkIfdataExistsToSave(): void {
    if (this.teacher.operation === 'Add') {
      if (null !== this.teacher.Name && null !== this.teacher.IsAdmin) {
        this.disableSave = true;
      }
    }
  }

  close(): void {
    debugger;
    this.activeModal.close(this.teacher);
  }

  cancel(): void {
    this.activeModal.close();
  }
  // Write change back to parent
  onDateChange(value: Date) {
    this.onChange(value);
  }

  // Write change back to parent
  onDateSelect(value: any) {
    this.onChange(new Date(value.year, value.month - 1, value.day));
  }
  // Function to call when the date changes.
  onChange = (date?: Date) => { };

}
