import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    @inject('apiUrl')() //provideIn
    private apiUrl: string,
    private http: HttpClient
  ) { }
  
  // CardService.apiUrl!: string | undefined;

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]> (this.apiUrl + '/cards'); 
  }

  // return url('http://localhost:3000/users/'): string | undefined
  // import { HttpClientModule } from '@angular/common/http';

  
}


