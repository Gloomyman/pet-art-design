import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../../http/http-wrapper.service';
import {Observable, of} from 'rxjs';
import {Shot} from '../../entity/Shot';
import {map} from 'rxjs/operators';
import {ShotMapperService} from '../../mapper/shot-mapper.service';
import {ShotDTO} from '../../dto/shot-dto';
import {UpdateShotDTO} from '../../dto/update-shot-dto';
import {CreateShotDTO} from '../../dto/create-shot-dto';

@Injectable({
  providedIn: 'root'
})
export class ShotService {

  constructor(private httpWrapper: HttpWrapperService,
              private shotMapperService: ShotMapperService) {
  }

  getShots(): Observable<Shot[]> {
    return this.httpWrapper.get('/user/shots?page=1')
      .pipe(map((value: ShotDTO[]) => {
        const shots = this.shotMapperService.toShotList(value);
        shots.push(new Shot()); // for test proposes only
        return shots;
      }));
  }

  updateShot(id: number, updateShotDTO: UpdateShotDTO): Observable<Shot> {

    this.httpWrapper.put('/shots/14142258', {
      'title': 'Updated title',
      'description': 'Updated description',
      'low_profile': true
    })
      .subscribe(value => {
        console.log('GET ', value);
      });
    // return this.httpWrapper.put(`/shots/${id}`, updateShotDTO);
    return of();
  }

  createShot(createShotDTO: CreateShotDTO): Observable<Shot> {
    return this.httpWrapper.post(`/shots`, createShotDTO)
      .pipe(map(() => {
        return this.shotMapperService.toShotWithImage(createShotDTO);
      }));
  }
}
