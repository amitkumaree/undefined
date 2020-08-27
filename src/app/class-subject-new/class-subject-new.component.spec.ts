import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSubjectNewComponent } from './class-subject-new.component';

describe('ClassSubjectNewComponent', () => {
  let component: ClassSubjectNewComponent;
  let fixture: ComponentFixture<ClassSubjectNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSubjectNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSubjectNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
