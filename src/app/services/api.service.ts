import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IParams {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `https://jsonplaceholder.typicode.com`;

  constructor(private http: HttpClient) {}

  private convertToUrlParams(params: IParams): HttpParams {
    let _params = new HttpParams();

    for (let k in params) {
      _params.append(k, params[k]);
    }

    return _params;
  }

  get<T>(suburl: string, params?: IParams): Observable<T> {
    const q = params ? this.convertToUrlParams(params) : {};

    return this.http.get<T>(this.apiUrl + suburl, { params: q });
  }
}
