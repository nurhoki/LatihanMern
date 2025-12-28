console.log('Hello javascript');

//import dengan named export
import {penjumlahan, PI} from './kalkulator.js';

//import dengan default export (langsung jadi variabel baru)
import hitung from './kalkulator.js';

const hasil = penjumlahan(10, 20);
console.log(`hasil penjumlahan: ${hasil}`);

const luaspermukaanbumi = 4 * PI * (6371 * 6371); 
console.log(`luas permukaan bumi: ${luaspermukaanbumi.toLocaleString()} km²`);

const object = new hitung(100);
console.log(`nilai angka dari class angka: ${object.angka}`);