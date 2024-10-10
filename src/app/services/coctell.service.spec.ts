import { TestBed } from '@angular/core/testing';

import { CoctellService } from './coctell.service';

describe('CoctellService', () => {
  let service: CoctellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoctellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
