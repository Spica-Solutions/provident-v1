import { TestBed } from '@angular/core/testing';

import { SpUiService } from './sp-ui.service';

describe('SpUiService', () => {
  let service: SpUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
