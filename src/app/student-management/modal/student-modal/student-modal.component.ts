import { StudentMstr } from './../../../Models/StudentMstr';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.css']
})
export class StudentModalComponent implements OnInit {
  @Input() public student: StudentMstr;
  @Input() public students: StudentMstr[] = [];
  classes: string[] = [];
  studentEntryForm: FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllClass();
    this.studentEntryForm = this.formBuilder.group({
      regNo: ['', Validators.required],
      name: ['', Validators.required],
      class: ['', Validators.required],
      sec: ['', Validators.required],
      dob: ['', Validators.required],
    });
    // this.studentEntryForm.patchValue({
    //   regNo: this.student.RegistrationNo,
    //   name: this.student.Name,
    //   class: this.student.Class,
    //   sec: this.student.Section,
    //   dob: this.student.DOB,
    // });
  }

  get f() { return this.studentEntryForm.controls; }

  getAllClass(): void {
    this.students.forEach(element => {
      if (this.classes.indexOf(element.Class) === -1) {
        this.classes.push(element.Class);
      }
    });
  }

  close(): void {
    // debugger;
    this.submitted = true;
    if (!this.studentEntryForm.valid) {
      return;
    }
    this.activeModal.close(this.student);
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
  onChange = (date?: Date) => {
    debugger;
    this.student.DOB = date;
  };
}
