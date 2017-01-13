/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonfirmasiPemesananComponent } from './konfirmasi-pemesanan.component';

describe('KonfirmasiPemesananComponent', () => {
  let component: KonfirmasiPemesananComponent;
  let fixture: ComponentFixture<KonfirmasiPemesananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonfirmasiPemesananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiPemesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
