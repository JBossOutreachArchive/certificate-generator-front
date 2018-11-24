import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGenerateComponent } from './certgen.component';

describe('GenerateComponent', () => {
  let component: CertificateGenerateComponent;
  let fixture: ComponentFixture<CertificateGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
