import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCertificatesComponent } from './organization.certificates.component';

describe('OrganizationCertificatesComponent', () => {
  let component: OrganizationCertificatesComponent;
  let fixture: ComponentFixture<OrganizationCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
