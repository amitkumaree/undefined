import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-subject-for-exam-setup-screen',
  templateUrl: './class-subject-for-exam-setup-screen.component.html',
  styleUrls: ['./class-subject-for-exam-setup-screen.component.css']
})
export class ClassSubjectForExamSetupScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmitclick(): void {
    alert('hi....');
  }
}
