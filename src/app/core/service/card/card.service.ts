import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../../http/http-wrapper.service';
import {Observable, of} from 'rxjs';
import {Card} from '../../entity/Card';
import {map} from 'rxjs/operators';
import {CardMapperService} from '../../mapper/card-mapper.service';
import {CardDTO} from '../../dto/card-dto';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpWrapper: HttpWrapperService,
              private cardMapperService: CardMapperService) {
  }

  getCards(): Observable<Card[]> {
    return this.httpWrapper.get('/user/shots?page=1')
      .pipe(map((value: CardDTO[]) => {
        const cards = this.cardMapperService.toCardList(value);
        cards.push(new Card()); // for test proposes only
        return cards;
      }));
  }

  updateCard(card: Card): Observable<Card> {
    return of(card);
  }
}
