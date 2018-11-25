import { TestBed, inject } from '@angular/core/testing';

import { CertStoreService } from './cert-store.service';

describe('CertStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertStoreService]
    });
  });

  it('should be created', inject([CertStoreService], (service: CertStoreService) => {
    expect(service).toBeTruthy();
  }));
});
