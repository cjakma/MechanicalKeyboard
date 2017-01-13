import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';
import { KeyboardSearchComponent } from './hero-search/hero-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


import { KeyboardService } from './services/keyboard.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';
import { PesananComponent } from './pesanan/pesanan.component';
import { KonfirmasiPembayaranComponent } from './konfirmasi-pembayaran/konfirmasi-pembayaran.component';
import { KonfirmasiPemesananComponent } from './konfirmasi-pemesanan/konfirmasi-pemesanan.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardsComponent,
    KeyDetailComponent,
    DashboardComponent,
    KeyboardSearchComponent,
	ShoppingcartComponent,
	PemesananComponent,
	PembayaranComponent,
	PesananComponent,
	KonfirmasiPembayaranComponent,
	KonfirmasiPemesananComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [KeyboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
