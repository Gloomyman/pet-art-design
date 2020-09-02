import {Component, OnInit} from '@angular/core';
import {Card} from '../core/entity/Card';
import {CardService} from '../core/service/card/card.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCards: Observable<Card[]>;

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    // this.allCards = of([new Card(), new Card(), new Card()]);
    this.allCards = this.cardService.getCards();
    this.allCards.subscribe(all => {
      console.log(all);
    });
  }
}
