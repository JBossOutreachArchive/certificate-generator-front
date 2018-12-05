import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateBaftekComponent } from './certificate-baftek.component';

describe('CertificateBaftekComponent', () => {
  let component: CertificateBaftekComponent;
  let fixture: ComponentFixture<CertificateBaftekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateBaftekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateBaftekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
