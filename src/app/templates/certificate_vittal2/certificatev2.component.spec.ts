import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { CertificateVittal2Component } from './certificatev2.component';

 describe('CertificateVittal2Component', () => {
   let component: CertificateVittal2Component;
   let fixture: ComponentFixture<CertificateVittal2Component>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ CertificateVittal2Component ]
     })
     .compileComponents();
   }));

   beforeEach(() => {
     fixture = TestBed.createComponent(CertificateVittal2Component);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
