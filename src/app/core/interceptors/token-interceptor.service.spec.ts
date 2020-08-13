import {TestBed} from '@angular/core/testing';

import {TokenInterceptor} from './token-interceptor.service';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GlobalSpinnerService} from '../service/global-spinner/global-spinner.service';
import {AuthService} from '../service/auth/auth.service';
import {ToasterService} from '../service/toaster/toaster.service';

describe('TokenInterceptor', () => {
  let service: TokenInterceptor;
  const globalSpinnerServiceStub: GlobalSpinnerService = jasmine.createSpyObj(
    ['disableSpinner']
  );
  const authServiceStub: AuthService = jasmine.createSpyObj(
    ['getToken']
  );
  const toasterServiceStub: ToasterService = jasmine.createSpyObj(
    ['error']
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
      providers: [
        {provide: GlobalSpinnerService, useValue: globalSpinnerServiceStub},
        {provide: AuthService, useValue: authServiceStub},
        {provide: ToasterService, useValue: toasterServiceStub}
      ]
    });
    service = TestBed.inject(TokenInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('intercept should disable spinner on error', async(() => {
  //
  //   // SETUP
  //   const request: HttpRequest<any> = jasmine.createSpyObj(['clone']);
  //   const next = jasmine.createSpyObj(['handle']);
  //   next.handle = jasmine.createSpy('handle').and.returnValue(throwError('test'));
  //
  //   service.handleError = createSpy().and.returnValue(of());
  //
  //   // ACT
  //   service.intercept(request, <HttpHandler> next)
  //     .subscribe();
  //
  //   // VERIFY
  //   expect(globalSpinnerServiceStub.disableSpinner)
  //     .toHaveBeenCalled();
  //
  // }));
});
