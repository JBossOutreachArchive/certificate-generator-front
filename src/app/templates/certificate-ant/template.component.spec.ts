import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateAntComponent } from './template.component';

describe('CertificateAntComponent', () => {
  let component: CertificateAntComponent;
  let fixture: ComponentFixture<CertificateAntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateAntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
