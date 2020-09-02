import {Injectable} from '@angular/core';
import {User} from '../../entity/User';
import {HttpWrapperService} from '../../http/http-wrapper.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpWrapper: HttpWrapperService) {
  }

  getUser(): Observable<User> {
    return this.httpWrapper.get<User>('/user');
  }

  //{
  // "avatar_url": "https://static.dribbble.com/assets/avatar-default-aa2eab7684294781f93bc99ad394a0eb3249c5768c21390163c9f55ea8ef83a4.gif",
  // "bio": "",
  // "can_upload_shot": true,
  // "created_at": "2020-08-12T14:46:04.546-04:00",
  // "followers_count": 0,
  // "html_url": "https://dribbble.com/alex_alex_alex",
  // "id": 5874729,
  // "links": {},
  // "location": "USA",
  // "login": "alex_alex_alex",
  // "name": "alex",
  // "pro": false,
  // "type": "User",
  // "teams": [] }
}
