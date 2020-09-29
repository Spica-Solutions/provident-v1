import { TestBed } from '@angular/core/testing';

import { SpApiService } from './sp-api.service';

describe('SpApiService', () => {
  let service: SpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
