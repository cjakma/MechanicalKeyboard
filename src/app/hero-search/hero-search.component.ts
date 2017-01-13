import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Produk } from './../models/keyboard.model';
import { KeyboardSearchService } from './../services/hero-search/hero-search.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [KeyboardSearchService]
})
export class KeyboardSearchComponent implements OnInit {

  keys: Observable<Produk[]>;
  private searchTerms = new Subject<string>();

  constructor(private keyboardSearchService: KeyboardSearchService, private router: Router) { }

  ngOnInit(): void {
    this.keys = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.keyboardSearchService.search(term) : Observable.of<Produk[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Produk[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  gotoDetail(key: Produk): void {
    let link = ['/detail', key.id];
    this.router.navigate(link);
  }
}
