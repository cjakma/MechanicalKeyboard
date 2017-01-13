/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KonfirmasiPembayaranComponent } from './konfirmasi-pembayaran.component';

describe('KonfirmasiPembayaranComponent', () => {
  let component: KonfirmasiPembayaranComponent;
  let fixture: ComponentFixture<KonfirmasiPembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonfirmasiPembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
