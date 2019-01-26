import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateVittal1Component } from './certificate.component';

  describe('CertificateVittal1Component', () => {
    let component: CertificateVittal1Component;
    let fixture: ComponentFixture<CertificateVittal1Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CertificateVittal1Component ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CertificateVittal1Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
