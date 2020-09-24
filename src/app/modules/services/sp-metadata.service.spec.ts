import { TestBed } from '@angular/core/testing';

import { SpMetadataService } from './sp-metadata.service';

describe('SpMetadataService', () => {
  let service: SpMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
