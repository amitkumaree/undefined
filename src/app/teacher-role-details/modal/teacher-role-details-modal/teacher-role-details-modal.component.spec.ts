import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRoleDetailsModalComponent } from './teacher-role-details-modal.component';

describe('TeacherRoleDetailsModalComponent', () => {
  let component: TeacherRoleDetailsModalComponent;
  let fixture: ComponentFixture<TeacherRoleDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRoleDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRoleDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
