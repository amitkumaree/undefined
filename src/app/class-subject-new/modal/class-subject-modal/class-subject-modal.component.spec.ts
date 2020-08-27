import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectModalComponent } from './class-subject-modal.component';

describe('ClassSubjectModalComponent', () => {
  let component: ClassSubjectModalComponent;
  let fixture: ComponentFixture<ClassSubjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
