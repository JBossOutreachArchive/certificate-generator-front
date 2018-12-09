import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCertificateComponent } from './single-certificate.component';

describe('SingleCertificateComponent', () => {
  let component: SingleCertificateComponent;
  let fixture: ComponentFixture<SingleCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
