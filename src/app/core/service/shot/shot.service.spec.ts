import {TestBed} from '@angular/core/testing';

import {ShotService} from './shot.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ShotService', () => {
  let service: ShotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ShotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
