import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
	  {id: 12, name: 'MKID Corsair Gaming K70 LUX RGB 11', description: 'ini adalah keyboard ', stock: 10, price: '300000', pic: '/app/pic/MKID_Corsair_Gaming_K70_LUX_RGB_11.jpg'},
      {id: 13, name: 'MKID Corsair Gaming K70 LUX RGB 31', description: 'ini adalah keyboard ', stock: 5, price: '500000', pic: '/app/pic/MKID_Corsair_Gaming_K70_LUX_RGB_31.jpg'},
      {id: 14, name: 'MKID MasterKeys Pro S RGB 61', description: 'ini adalah keyboard ', stock: 15, price: '650000', pic: '/app/pic/MKID_MasterKeys_Pro_S_RGB_61.jpg'},
      {id: 15, name: 'MKID MasterKeys Pro S RGB 11', description: 'ini adalah keyboard ', stock: 0, price: '350000', pic: '/app/pic/MKID_MasterKeys_Pro_S_RGB_11.jpg'},
      {id: 16, name: 'MKID Corsair Gaming K70 LUX RGB 61', description: 'ini adalah keyboard ', stock: 20, price: '600000', pic: '/app/pic/MKID_Corsair_Gaming_K70_LUX_RGB_61.jpg'},
      {id: 17, name: 'MKID Smart 68 Typewriter Black Gateron White LED 1', description: 'ini adalah keyboard ', stock: 22, price: '870000', pic: '/app/pic/MKID_Smart_68_Typewriter_Black_Gateron_White_LED_1.jpg'},
      {id: 18, name: 'MKID Smart 68 Typewriter Black Gateron White LED 3', description: 'ini adalah keyboard ', stock: 14, price: '855000', pic: '/app/pic/MKID_Smart_68_Typewriter_Black_Gateron_White_LED_3.jpg'},
      {id: 19, name: 'MKID KBParadise V60 Dolch 12', description: 'ini adalah keyboard ', stock: 25, price: '330000', pic: '/app/pic/MKID_KBParadise_V60_Dolch_12.jpg'},
      {id: 20, name: 'MKID VB87M Black Gateron Dark Gray F 11', description: 'ini adalah keyboard ', stock: 21, price: '400000', pic: '/app/pic/MKID_VB87M_Black_Gateron_Dark_Gray_F_11.jpg'}
    ];
    return {heroes};
  }
}
