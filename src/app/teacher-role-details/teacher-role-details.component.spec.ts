import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRoleDetailsComponent } from './teacher-role-details.component';

describe('TeacherRoleDetailsComponent', () => {
  let component: TeacherRoleDetailsComponent;
  let fixture: ComponentFixture<TeacherRoleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRoleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRoleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
