/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PemesananComponent } from './pemesanan.component';

describe('PemesananComponent', () => {
  let component: PemesananComponent;
  let fixture: ComponentFixture<PemesananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemesananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
