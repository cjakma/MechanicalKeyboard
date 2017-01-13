import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Produk } from './../../models/keyboard.model';

@Injectable()
export class KeyboardSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Produk[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r: Response) => r.json().data as Produk[]);
  }
}
