import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  static readonly apiBaseURL: string = environment.api_base_url;

  constructor(private httpClient: HttpClient) {
  }

  private static buildUrl(uri: string): string {
    return HttpWrapperService.apiBaseURL + uri;
  }

  get<T>(uri: string): Observable<T> {
    const url = HttpWrapperService.buildUrl(uri);

    const options = {
      headers: new HttpHeaders({
        mode: 'no-cors'
      })
    };
    return this.httpClient.get<T>(url, options);
  }

  put<T>(uri: string, body: any): Observable<T> {
    const url = HttpWrapperService.buildUrl(uri);

    return this.httpClient.put<T>(url, body);
  }

  post<T>(uri: string, body: any): Observable<T> {
    const url = HttpWrapperService.buildUrl(uri);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        mode: 'no-cors'
      })
    };
    return this.httpClient.post<T>(url, body, options);
  }
}
