import {TestBed} from '@angular/core/testing';

import {CanActivateRouteGuard} from './can-activate-route-guard.service';

describe('CanActivateRouteGuardGuard', () => {
  let guard: CanActivateRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
