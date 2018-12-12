import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateVittalComponent } from './certificatev.component';

  describe('CertificateVittalComponent', () => {
    let component: CertificateVittalComponent;
    let fixture: ComponentFixture<CertificateVittalComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ CertificateVittalComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(CertificateVittalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
