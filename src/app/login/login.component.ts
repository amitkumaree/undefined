import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { TeacherMstr } from '../Models/teacherMstr';
import { Configuration } from '../app.constant';
import { InAppMessageService } from '../in-app-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Configuration, RestService]
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  spinner = false;
  teachers: TeacherMstr[] = [];
  constructor(private router: Router, private svc: RestService,
    private formBuilder: FormBuilder, private msg: InAppMessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onchnage(): void {
    // formData.form.controls['email'].setErrors(null);
    // this.loginForm.valid = true;
    this.loginForm.controls['userid'].setErrors(null);
    this.loginForm.controls['pass'].setErrors(null);
  }

  checkLogin(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.spinner = true;
    this.svc.getAll<TeacherMstr[]>('TeacherMstr').subscribe(
      res => {
        this.teachers = res;
        const filteredTeacher = res.filter(e => e.TeacherLoginID == this.f.userid.value &&
          e.LoginPwd == this.f.pass.value && e.IsAdmin === 'Y')[0];
        if (undefined !== filteredTeacher && null !== filteredTeacher) {
          this.spinner = false;
          this.msg.sendisLoggedInShowHeader(true);
          this.router.navigateByUrl('home');
        } else {
          this.spinner = false;
          // user doesnt exixt error
          this.loginForm.controls['userid'].setErrors({'incorrect': true});
          this.loginForm.controls['pass'].setErrors({'incorrect': true});
        }
      },
      err => { this.spinner = false; }
    );
  }
}
