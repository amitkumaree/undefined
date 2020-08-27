import { Cls_Subject } from './classsubject';
import { TeacherMstr } from './teacherMstr';
import { TeacherRoleDtl } from './TeacherRoleDtl';

export class TeacherRoleDtlVM {
  public TeacherRoleDtl: TeacherRoleDtl;
  public TeacherMstr: TeacherMstr;
  public Cls_Subject: Cls_Subject;
  public operation: string;

  constructor() {
    this.Cls_Subject = new Cls_Subject();
    this.TeacherMstr = new TeacherMstr();
    this.TeacherRoleDtl = new TeacherRoleDtl();
  }
}
