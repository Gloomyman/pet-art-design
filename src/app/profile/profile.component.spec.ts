import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileComponent} from './profile.component';
import {UserService} from '../core/service/user/user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {of} from 'rxjs';
import {User} from '../core/entity/User';
import SpyObj = jasmine.SpyObj;

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  const mockUserService: SpyObj<UserService> = jasmine.createSpyObj(
    'userService',
    ['getUser']
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ProfileComponent],
      providers: [
        {provide: UserService, useValue: mockUserService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    mockUserService.getUser.and.returnValue(of(new User));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService.getUser', async(() => {
    // SETUP
    mockUserService.getUser.and.returnValue(of(new User));

    // const userService = spyOn(TestBed.inject(UserService), 'getUser');

    // ACT
    component.ngOnInit();

    // VERIFY
    expect(mockUserService.getUser).toHaveBeenCalled();
  }));

});
