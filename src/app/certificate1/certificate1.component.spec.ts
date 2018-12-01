import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificate1Component } from './certificate1.component';

describe('Certificate1Component', () => {
  let component: Certificate1Component;
  let fixture: ComponentFixture<Certificate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Certificate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Certificate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
