import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateTemplateComponent } from './certificate-template.component';

describe('CertificateTemplateComponent', () => {
  let component: CertificateTemplateComponent;
  let fixture: ComponentFixture<CertificateTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
