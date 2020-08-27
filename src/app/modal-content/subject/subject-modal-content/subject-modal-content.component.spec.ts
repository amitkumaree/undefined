import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectModalContentComponent } from './subject-modal-content.component';

describe('SubjectModalContentComponent', () => {
  let component: SubjectModalContentComponent;
  let fixture: ComponentFixture<SubjectModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
