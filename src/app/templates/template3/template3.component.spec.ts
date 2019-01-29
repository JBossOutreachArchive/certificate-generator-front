import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Template3Component } from './template3.component';

  describe('CertificateVittal1Component', () => {
    let component: Template3Component;
    let fixture: ComponentFixture<Template3Component>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ Template3Component ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(Template3Component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
