import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssectionComponent } from './classsection.component';

describe('ClasssectionComponent', () => {
  let component: ClasssectionComponent;
  let fixture: ComponentFixture<ClasssectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasssectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
