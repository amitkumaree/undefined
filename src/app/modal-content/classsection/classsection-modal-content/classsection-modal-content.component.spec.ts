import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssectionModalContentComponent } from './classsection-modal-content.component';

describe('ClasssectionModalContentComponent', () => {
  let component: ClasssectionModalContentComponent;
  let fixture: ComponentFixture<ClasssectionModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasssectionModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssectionModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
