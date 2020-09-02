import {TestBed} from '@angular/core/testing';

import {ToasterService} from './toaster.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('ToasterService', () => {
  let service: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule]
    });
    service = TestBed.inject(ToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
