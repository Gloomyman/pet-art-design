import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../core/entity/Card';
import {EditCardPopupComponent} from '../edit-card-popup/edit-card-popup.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card = new Card();

  readonly defaultTitle = 'Default title';
  readonly defaultImageUrl = './../../assets/images/mountains.jpg';
  readonly defaultDescription = 'The Himalayas is a mountain range in Asia.';

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  openCardDialog() {
    this.dialog.open(EditCardPopupComponent, {
      width: '33%',
      data: this.card
    });
  }

}
