import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertsidComponent } from './certsid.component';

describe('CertsidComponent', () => {
  let component: CertsidComponent;
  let fixture: ComponentFixture<CertsidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertsidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
