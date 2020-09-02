import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUrl: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
  }

  logout(): void {
    this.authService.logout();
  }

}
