import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGCIComponent } from './certificate-gci18.component';

describe('CertificateGCIComponent', () => {
  let component: CertificateGCIComponent;
  let fixture: ComponentFixture<CertificateGCIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateGCIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateGCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});