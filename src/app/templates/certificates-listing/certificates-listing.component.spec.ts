import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesListingComponent } from './certificates-listing.component';

describe('CertificatesListingComponent', () => {
  let component: CertificatesListingComponent;
  let fixture: ComponentFixture<CertificatesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
