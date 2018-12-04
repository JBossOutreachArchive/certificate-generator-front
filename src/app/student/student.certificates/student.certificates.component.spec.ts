import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCertificatesComponent } from './student.certificates.component';

describe('Student.CertificatesComponent', () => {
  let component: StudentCertificatesComponent;
  let fixture: ComponentFixture<StudentCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
