import {Injectable} from '@angular/core';
import {AuthDTO} from '../../dto/auth-d-t-o';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpWrapperService} from '../../http/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  private readonly jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router, private httpWrapperService: HttpWrapperService) {
  }

  login(authDTO: AuthDTO): void {

    window.location.href = 'https://dribbble.com/oauth/authorize?client_id=201bd47a5f2bc3258fd8594e763016572d10043f42f78f0fe1c654a868db288d&redirect_uri=http://localhost:4200/auth-callback&state=test';
    // this.httpWrapperService.get(
    // '/oauth/authorize
    // ?client_id=201bd47a5f2bc3258fd8594e763016572d10043f42f78f0fe1c654a868db288d
    // &redirect_uri=http://localhost:4200/auth-callback&state=test'
    // )
    //   .subscribe((code: string) => {
    //     authDTO.code = code;
    //     console.log(authDTO);
    //     this.httpWrapperService.post('/oauth/token', authDTO)
    //       .subscribe(value => {
    //         console.log('Value: ', value);
    //         this.setToken('value');
    //         this.router.navigate(['/home']);
    //       });
    //   });
  }

  getToken(): string {
    return this.token ? this.token : localStorage.getItem('token');
  }

  refreshToken(): Observable<boolean> {
    this.setToken('1234567890');
    return of(true);
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.token != null && !this.jwtHelper.isTokenExpired(this.token);
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }
}
