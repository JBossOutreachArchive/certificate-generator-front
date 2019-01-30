import { async, ComponentFixture, TestBed } from '@angular/core/testing';

 import { Template4Component } from './template4.component';

 describe('CertificateVittal2Component', () => {
   let component: Template4Component;
   let fixture: ComponentFixture<Template4Component>;

   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ Template4Component ]
     })
     .compileComponents();
   }));

   beforeEach(() => {
     fixture = TestBed.createComponent(Template4Component);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });

   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
