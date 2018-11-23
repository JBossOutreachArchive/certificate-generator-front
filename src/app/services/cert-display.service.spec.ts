import { TestBed, inject } from '@angular/core/testing';

import { CertDisplayService } from './cert-display.service';

describe('CertDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertDisplayService]
    });
  });

  it('should be created', inject([CertDisplayService], (service: CertDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
