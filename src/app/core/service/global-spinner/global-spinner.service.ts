import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalSpinnerService {

  public isLoading = new BehaviorSubject(false);

  constructor() {
  }

  enableSpinner(): void {
    this.isLoading.next(true);
  }

  disableSpinner(): void {
    this.isLoading.next(false);
  }

}
