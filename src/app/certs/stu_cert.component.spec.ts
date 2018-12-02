import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { StuCertComponent } from './stu_cert.component';
 describe('StuCertComponent', () => {
  let component: StuCertComponent;
  let fixture: ComponentFixture<StuCertComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuCertComponent ]
    })
    .compileComponents();
  }));
   beforeEach(() => {
    fixture = TestBed.createComponent(StuCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});