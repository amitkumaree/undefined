import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssubjectModalContentComponent } from './classsubject-modal-content.component';

describe('ClasssubjectModalContentComponent', () => {
  let component: ClasssubjectModalContentComponent;
  let fixture: ComponentFixture<ClasssubjectModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasssubjectModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssubjectModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
