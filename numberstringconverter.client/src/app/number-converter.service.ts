import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberConverterService {
  private baseURL = 'https://localhost:7009/';

  constructor(private http: HttpClient) { }

  // function that get output from API
  getConvertedNumber(amount: number): Observable<any> {
    return this.http.get(this.baseURL + `Converter?amount=${amount}`)
  }
}
