import {TestBed} from '@angular/core/testing';

import {CardMapperService} from './card-mapper.service';

describe('CardMapperService', () => {
  let service: CardMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
