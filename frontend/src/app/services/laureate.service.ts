import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {HttpRequestService} from './http.service';

@Injectable()
export class LaureateService {

  constructor(private httpService: HttpRequestService) {
  }

  getLaureates(): Observable<any> {
    return this.httpService.sendGetRequest('/laureate/getLaureates');
  }

  getFields(): Observable<any> {
    return this.httpService.sendGetRequest('/laureate/getFields');
  }
}
