import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable()
export class HttpRequestService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  public sendPostRequest(url: string, body, success, error) {

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('charset', 'utf-8')
      .append('timeout', '30000');

    this.http.post(this.baseUrl + url, body, {headers: headers, withCredentials: true}).subscribe(success, error);

  }

  public sendGetRequest(url) {
    const headers = new HttpHeaders()
      .append('timeout', '30000')
      .append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.baseUrl + url, {headers});
  }
}
