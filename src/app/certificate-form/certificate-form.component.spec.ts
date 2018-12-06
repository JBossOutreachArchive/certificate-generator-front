import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateFormComponent } from './certificate-form.component';

describe('CertificateFormComponent', () => {
  let component: CertificateFormComponent;
  let fixture: ComponentFixture<CertificateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
