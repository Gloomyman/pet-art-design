import {Injectable} from '@angular/core';
import {Card} from '../entity/Card';
import {CardDTO} from '../dto/card-dto';

@Injectable({
  providedIn: 'root'
})
export class CardMapperService {

  constructor() {
  }

  toCardList(cardList: CardDTO[]): Card[] {
    console.log(cardList);
    return cardList.map(this.toCard);
  }

  toCard(cardDTO: CardDTO): Card {
    const card = new Card();
    card.description = cardDTO.description;
    card.imageUrl = cardDTO.images.hidpi ? cardDTO.images.hidpi : cardDTO.images.normal;
    card.title = cardDTO.title;
    return card;
  }
}
