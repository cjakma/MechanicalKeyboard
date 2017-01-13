import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Produk } from './../models/keyboard.model';

@Injectable()
export class KeyboardService {

  private heroesUrl = 'app/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }
  
  getCollectables() {
    return this.http.get(this.heroesUrl);
  }


  getHeroes(): Promise<Produk[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Produk[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Produk> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  create(name: string): Promise<Produk> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: Produk): Promise<Produk> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
