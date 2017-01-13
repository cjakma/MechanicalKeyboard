/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PembayaranComponent } from './pembayaran.component';

describe('PembayaranComponent', () => {
  let component: PembayaranComponent;
  let fixture: ComponentFixture<PembayaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembayaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
