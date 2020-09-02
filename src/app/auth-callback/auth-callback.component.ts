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
      if (params && !params.error) {
        this.authService.exchangeAndSetToken(params.code)
          .subscribe(() => this.router.navigate(['/home']));
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
