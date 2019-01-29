import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template7Component } from './template7.component';

describe('CertsidComponent', () => {
  let component: Template7Component;
  let fixture: ComponentFixture<Template7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
