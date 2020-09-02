import {TestBed} from '@angular/core/testing';

import {HttpWrapperService} from './http-wrapper.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HttpWrapperService', () => {
  let service: HttpWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
