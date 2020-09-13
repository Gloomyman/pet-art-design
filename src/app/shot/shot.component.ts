import {Component, Input, OnInit} from '@angular/core';
import {Shot} from '../core/entity/Shot';
import {EditShotPopupComponent} from './edit-shot-popup/edit-shot-popup.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss']
})
export class ShotComponent implements OnInit {

  @Input()
  shot = new Shot();

  readonly defaultTitle = 'Default title';
  readonly defaultImageUrl = './../../assets/images/mountains.jpg';
  readonly defaultDescription = 'The Himalayas is a mountain range in Asia.';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  openShotDialog() {
    this.dialog.open(EditShotPopupComponent, {
      width: '33%',
      data: this.shot
    });
  }

}
