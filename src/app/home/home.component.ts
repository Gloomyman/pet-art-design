import {Component, OnInit} from '@angular/core';
import {Card} from '../core/entity/Card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCards: Card[];

  constructor() {
  }

  ngOnInit(): void {
    this.allCards = [new Card(), new Card(), new Card()];
  }
}
