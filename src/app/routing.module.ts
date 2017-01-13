import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeyboardsComponent } from './keyboards/keyboards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KeyDetailComponent } from './key-detail/key-detail.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PemesananComponent } from './pemesanan/pemesanan.component';
import { PembayaranComponent } from './pembayaran/pembayaran.component';
import { PesananComponent } from './pesanan/pesanan.component';
import { KonfirmasiPembayaranComponent } from './konfirmasi-pembayaran/konfirmasi-pembayaran.component';
import { KonfirmasiPemesananComponent } from './konfirmasi-pemesanan/konfirmasi-pemesanan.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'alamat-pemesan',
    component: PemesananComponent
  },
  {
    path: 'cara-pembayaran',
    component: PembayaranComponent
  },
  {
    path: 'daftar-pesanan',
    component: PesananComponent
  },
  {
    path: 'konfirmasi-pembayaran',
    component: KonfirmasiPembayaranComponent
  },
  {
    path: 'Konfirmasi-Pemesanan',
    component: KonfirmasiPemesananComponent
  },
  {
    path: 'heroes',
    component: KeyboardsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: KeyDetailComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
