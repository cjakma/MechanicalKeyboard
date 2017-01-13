import { Component, OnInit } from '@angular/core';

import { Produk } from './../models/keyboard.model';
import { KeyboardService } from './../services/keyboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  keys: Produk[] = [];

  constructor(private keyService: KeyboardService) { }

  ngOnInit() {
    this.keyService.getHeroes().then((keys) => {
      this.keys = keys.slice(1, 20);
	  //this.keyService = this.keyService.getCollectables();
	  //this.keyService.getHeroes();
    });
  }

}
