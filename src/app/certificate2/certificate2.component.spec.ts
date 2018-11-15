import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificate2Component } from './certificate2.component';

describe('Certificate2Component', () => {
  let component: Certificate2Component;
  let fixture: ComponentFixture<Certificate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Certificate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Certificate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
