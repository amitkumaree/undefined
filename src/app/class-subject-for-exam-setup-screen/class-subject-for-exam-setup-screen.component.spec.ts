import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectForExamSetupScreenComponent } from './class-subject-for-exam-setup-screen.component';

describe('ClassSubjectForExamSetupScreenComponent', () => {
  let component: ClassSubjectForExamSetupScreenComponent;
  let fixture: ComponentFixture<ClassSubjectForExamSetupScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubjectForExamSetupScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectForExamSetupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
