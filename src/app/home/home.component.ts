import {Component, OnInit} from '@angular/core';
import {Shot} from '../core/entity/Shot';
import {ShotService} from '../core/service/shot/shot.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allShots: Observable<Shot[]>;

  constructor(private shotService: ShotService) {
  }

  ngOnInit(): void {
    this.allShots = this.shotService.getShots();
  }
}
