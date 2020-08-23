import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../core/service/auth/auth.service';
import {AuthDTO} from '../core/dto/auth-d-t-o';
import SpyObj = jasmine.SpyObj;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const mockAuthService: SpyObj<AuthService> = jasmine.createSpyObj(
    'authService',
    ['login']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {provide: AuthService, useValue: mockAuthService}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement;

    expect(element.querySelector('form')).toBeTruthy();
    expect(element.querySelector('#email')).toBeTruthy();
    expect(element.querySelector('#password')).toBeTruthy();
    expect(element.querySelector('button')).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate email input as required', () => {
    const email = component.form.controls.email;

    expect(email.valid).toBeFalsy();
    expect(email.errors.required).toBeTruthy();
  });

  it('should return model invalid when form is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate password input as required', () => {
    const password = component.form.controls.password;

    expect(password.valid).toBeFalsy();
    expect(password.errors.required).toBeTruthy();
  });

  it('should validate email format', () => {
    // SETUP
    const email = component.form.controls.email;

    // ACT
    email.setValue('test');

    // VERIFY
    const errors = email.errors;
    expect(errors.required).toBeFalsy();
    expect(errors.email).toBeTruthy();
    expect(email.valid).toBeFalsy();
  });

  it('should validate email format correctly', () => {
    // SETUP
    const email = component.form.controls.email;

    // ACT
    email.setValue('test@test.com');

    // VERIFY
    const errors = email.errors || {};
    expect(email.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
    expect(errors.pattern).toBeFalsy();
  });

  it('should render email validation message when formControl is submitted and invalid', () => {
    // SETUP
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('#email-error')).toBeFalsy();

    // ACT
    elements.querySelector('button').click();

    // VERIFY
    fixture.detectChanges();
    expect(elements.querySelector('#email-error')).toBeTruthy();
    expect(elements.querySelector('#email-error').textContent).toContain(
      'Please enter a valid email.'
    );
  });

  it('should render password validation message when formControl is submitted and invalid', () => {
    // SETUP
    const elements: HTMLElement = fixture.nativeElement;
    expect(elements.querySelector('#password-error')).toBeFalsy();

    // ACT
    elements.querySelector('button').click();

    // VERIFY
    fixture.detectChanges();
    expect(elements.querySelector('#password-error')).toBeTruthy();
    expect(elements.querySelector('#password-error').textContent).toContain(
      'Please enter a valid password.'
    );
  });

  it('should call authService on onSubmit', () => {
    // SETUP
    const authDto: AuthDTO = new AuthDTO('testEmail@gmail.com', 'testPass');
    component.form.controls.email.setValue(authDto.email);
    component.form.controls.password.setValue(authDto.pass);

    // ACT
    component.onSubmit();

    // VERIFY
    expect(mockAuthService.login).toHaveBeenCalledWith(authDto);
  });

});
