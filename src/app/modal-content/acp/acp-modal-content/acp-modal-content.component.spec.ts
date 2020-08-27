import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcpModalContentComponent } from "./acp-modal-content.component";

describe('AcpModalContentComponent', () => {
  let component: AcpModalContentComponent;
  let fixture: ComponentFixture<AcpModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcpModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcpModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
