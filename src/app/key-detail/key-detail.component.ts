import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Produk } from './../models/keyboard.model';
import { KeyboardService } from './../services/keyboard.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './key-detail.component.html',
  styleUrls: ['./key-detail.component.css']
})
export class KeyDetailComponent implements OnInit {
  @Input()
  keys: Produk;

  constructor(
    private keyService: KeyboardService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
      this.keyService.getHero(+params['id'])).subscribe(keys => this.keys = keys);
  }

  save(): void {
    this.keyService.update(this.keys)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
