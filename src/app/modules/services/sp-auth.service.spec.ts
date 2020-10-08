import { TestBed } from '@angular/core/testing';

import { SpAuthService } from './sp-auth.service';

describe('SpAuthService', () => {
  let service: SpAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
