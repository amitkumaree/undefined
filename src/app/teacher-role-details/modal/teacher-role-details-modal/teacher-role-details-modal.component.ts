import { TeacherRoleDtlVM } from './../../../Models/TeacherRoleDtlVM';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TeacherMstr } from 'src/app/Models/teacherMstr';
import { RestService } from 'src/app/rest.service';
import { Configuration } from 'src/app/app.constant';
import { Cls_Subject } from 'src/app/Models/classsubject';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherRoleDtl } from 'src/app/Models/TeacherRoleDtl';

@Component({
  selector: 'app-teacher-role-details-modal',
  templateUrl: './teacher-role-details-modal.component.html',
  styleUrls: ['./teacher-role-details-modal.component.css'],
  providers: [Configuration, RestService]
})
export class TeacherRoleDetailsModalComponent implements OnInit {
  @Input() public teacherRoleDtl: TeacherRoleDtlVM;
  // @Input() public teacherRoleDtls: TeacherRoleDtlVM[];
  uniqueTeachers: TeacherMstr[] = [];
  uniqueClsSubjects: Cls_Subject[] = [];
  constructor(public activeModal: NgbActiveModal, private svc: RestService,
    private formBuilder: FormBuilder) { }
  // teacherRoleDtlForm: FormGroup;
  // TeacherRoleDtl: TeacherRoleDtl;
  ngOnInit(): void {
    debugger;
    this.getTeachers();
    this.getClsSubject();
    // this.teacherRoleDtlForm = this.formBuilder.group({
    //   TeacherId: [''],
    //   ClsSubjectID: [''],
    //   IsAprv: ['']
    // });
  }

  private getTeachers(): void {
    // this.spinner = true;
    this.svc.getAll<TeacherMstr[]>('TeacherMstr').subscribe(
      res => {
        this.uniqueTeachers = res.filter((item, i, ar) => ar.indexOf(item) === i);
        // this.spinner = false;
      },
      err => {
        // this.spinner = false;
      }
    );
  }

  private getClsSubject(): void {
    // this.spinner = true;
    this.svc.getAll<Cls_Subject[]>('ClassSubject').subscribe(
      res => {
        this.uniqueClsSubjects = res.filter((item, i, ar) => ar.indexOf(item) === i);
        // this.spinner = false;
      },
      err => { }
    );
  }

  close(): void {
    this.activeModal.close(this.teacherRoleDtl);
  }

  cancel(): void {
    this.activeModal.close();
  }
}
