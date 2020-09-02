import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../../http/http-wrapper.service';
import {Observable} from 'rxjs';
import {Card} from '../../entity/Card';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpWrapper: HttpWrapperService) {
  }

  getCards(): Observable<Card[]> {
    // return of([new Card(), new Card()]);

    // this.httpWrapper.get('/user').subscribe(user => {
    //   console.log('User', user);
    // } );
    return this.httpWrapper.get('/user/shots?page=2')
      .pipe(map(value => {
        console.log('Cards', value);
        return [new Card()];
      }));
    // return of([]);
  }
}
