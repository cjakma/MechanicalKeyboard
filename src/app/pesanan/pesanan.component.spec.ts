/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PesananComponent } from './pesanan.component';

describe('PesananComponent', () => {
  let component: PesananComponent;
  let fixture: ComponentFixture<PesananComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
