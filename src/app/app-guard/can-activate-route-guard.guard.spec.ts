import {TestBed} from '@angular/core/testing';

import {CanActivateRouteGuard} from './can-activate-route-guard.service';
import {AuthService} from '../core/service/auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import SpyObj = jasmine.SpyObj;

describe('CanActivateRouteGuardGuard', () => {
  let guard: CanActivateRouteGuard;
  const mockAuthService: SpyObj<AuthService> = jasmine.createSpyObj(
    'authService',
    ['login', 'isLoggedIn']);
  let router: Router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {provide: AuthService, useValue: mockAuthService}
      ]
    });
    router = TestBed.inject(Router);
    guard = TestBed.inject(CanActivateRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if loggedIn', () => {

    // SETUP
    mockAuthService.isLoggedIn.and.returnValue(true);

    // ACT
    const result = guard.canActivate(null, null);

    // VERIFY
    expect(result).toBeTrue();
  });

  it('should redito rect  false if not loggedIn', () => {

    // SETUP
    const navigateSpy = spyOn(router, 'navigate');
    mockAuthService.isLoggedIn.and.returnValue(false);

    // ACT
    guard.canActivate(null, null);

    // VERIFY
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
