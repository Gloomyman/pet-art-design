import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/service/auth/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.handleToken();
  }

  handleToken(): void {
    this.route.queryParams.subscribe(params => {
      console.log('All params', params);
      console.log('All param2', !params.error);
      if (params && !params.error) {
        // const parameters = params.split('&');
        console.log('param', params.code);
        const idToken = params.code;
        this.authService.setToken(idToken);
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
