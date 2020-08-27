import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassModalContentComponent } from './class-modal-content.component';

describe('ClassModalContentComponent', () => {
  let component: ClassModalContentComponent;
  let fixture: ComponentFixture<ClassModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
