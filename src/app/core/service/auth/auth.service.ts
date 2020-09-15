import {Injectable} from '@angular/core';
import {AuthDTO} from '../../dto/auth-d-t-o';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {HttpWrapperService} from '../../http/http-wrapper.service';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly LOGIN_URL: string = `https://dribbble.com/oauth/authorize?client_id=${environment.client_id}&redirect_uri=${environment.host}/auth-callback&state=test&scope=public+upload`;
  token: string;
  idTokenName = 'token';

  // private readonly jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router, private httpWrapper: HttpWrapperService) {
    this.token = localStorage.getItem(this.idTokenName);
  }

  login(authDTO: AuthDTO): void {
    console.log(authDTO);
    window.location.href = AuthService.LOGIN_URL;
  }

  getToken(): string {
    return this.token ? this.token : localStorage.getItem('token');
  }

  refreshToken(): Observable<boolean> {
    return of(true);
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.token != null;
    // && !this.jwtHelper.isTokenExpired(this.token)
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  exchangeAndSetToken(code: string): Observable<void> {
    const uri = `/oauth/token?code=${code}`;
    return this.httpWrapper.post<string>(uri, {})
      .pipe(map((res: any) => {
        const {access_token} = res;
        this.setToken(access_token);
      }));
  }
}
