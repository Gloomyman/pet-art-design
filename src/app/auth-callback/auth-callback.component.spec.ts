import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuthCallbackComponent} from './auth-callback.component';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from 'rxjs';
import {AuthService} from '../core/service/auth/auth.service';
import SpyObj = jasmine.SpyObj;

describe('AuthCallbackComponent', () => {
  let component: AuthCallbackComponent;
  let fixture: ComponentFixture<AuthCallbackComponent>;
  const mockAuthService: SpyObj<AuthService> = jasmine.createSpyObj(
    'authService',
    ['login', 'exchangeAndSetToken']);
  const mockRoute: SpyObj<Router> = jasmine.createSpyObj(
    'route',
    ['navigate']);
  const mockActivatedRoute = {
    queryParams: of({
      code: 'testCode',
    }),
  };

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AuthCallbackComponent],
      providers: [
        {provide: AuthService, useValue: mockAuthService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Router, useValue: mockRoute}
      ]
    })
      .compileComponents();
    mockActivatedRoute.queryParams = of();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
