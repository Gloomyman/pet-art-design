import {TestBed} from '@angular/core/testing';

import {ShotMapperService} from './shot-mapper.service';

describe('ShotMapperService', () => {
  let service: ShotMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShotMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
