import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../../http/http-wrapper.service';
import {Observable} from 'rxjs';
import {Card} from '../../entity/Card';
import {map} from 'rxjs/operators';
import {CardMapperService} from '../../mapper/card-mapper.service';
import {CardDTO} from '../../dto/card-dto';
import {UpdateCardDTO} from '../../dto/update-card-dto';
import {CreateCardDTO} from '../../dto/create-card-dto';

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

  updateCard(id: number, updateCardDTO: UpdateCardDTO): Observable<Card> {
    return this.httpWrapper.put(`/shots/${id}`, updateCardDTO);
  }

  createCard(createCardDTO: CreateCardDTO): Observable<Card> {
    return this.httpWrapper.post(`/shots`, createCardDTO)
      .pipe(map(() => {
        return this.cardMapperService.toCardWithImage(createCardDTO);
      }));
  }
}
