import { TestBed } from '@angular/core/testing';

import { NinosService } from './ninos.service';

describe('NinosService', () => {
  let service: NinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
