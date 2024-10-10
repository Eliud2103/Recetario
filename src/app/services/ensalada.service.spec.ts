import { TestBed } from '@angular/core/testing';

import { EnsaladaService } from './ensalada.service';

describe('EnsaladaService', () => {
  let service: EnsaladaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnsaladaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
