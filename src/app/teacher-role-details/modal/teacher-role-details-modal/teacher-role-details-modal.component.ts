import { TeacherRoleDtlVM } from './../../../Models/TeacherRoleDtlVM';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeacherMstr } from 'src/app/Models/teacherMstr';
import { RestService } from 'src/app/rest.service';
import { Configuration } from 'src/app/app.constant';

@Component({
  selector: 'app-teacher-role-details-modal',
  templateUrl: './teacher-role-details-modal.component.html',
  styleUrls: ['./teacher-role-details-modal.component.css'],
  providers: [Configuration, RestService]
})
export class TeacherRoleDetailsModalComponent implements OnInit {
  @Input() public teacherRoleDtl: TeacherRoleDtlVM;
  teachers: TeacherMstr[] = [];
  constructor(public activeModal: NgbActiveModal, private svc: RestService) { }

  ngOnInit(): void {
  }

  private getTeachers(): void {
    // this.spinner = true;
    this.svc.getAll<TeacherMstr[]>('TeacherMstr').subscribe(
      res => {
        this.teachers = res;
        // this.spinner = false;
      },
      err => {
        // this.spinner = false;
      }
    );
  }

  close(): void {
    this.activeModal.close(this.teacherRoleDtl);
  }

  cancel(): void {
    this.activeModal.close();
  }
}
