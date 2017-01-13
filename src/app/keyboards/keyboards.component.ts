import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Produk } from '../models/keyboard.model';
import { KeyboardService } from '../services/keyboard.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.css'],
  providers: [KeyboardService]
})
export class KeyboardsComponent implements OnInit {
  selectedKeyboard: Produk;
  keys: Produk[];

  constructor(private keyService: KeyboardService, private router: Router) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.keyService.getHeroes().then(keys =>
      this.keys = keys);
  }

  onSelect(key: Produk): void {
    this.selectedKeyboard = key;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.keyService.create(name)
      .then(key => {
        this.keys.push(key);
        this.selectedKeyboard = null;
      });
  }

  delete(key: Produk): void {
    this.keyService
      .delete(key.id)
      .then(() => {
        this.keys = this.keys.filter(h => h !== key);
        if (this.selectedKeyboard === key) {
          this.selectedKeyboard = null;
        }
      });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedKeyboard.id]);
  }
}
