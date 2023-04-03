//4'den 99'a kadar olan bir sayı aralığı için
//3 ve 5 ile (her ikisine birden) bölünebilen sayıların toplamını bulan programı yazınız.

let sum = 0;

for (let num = 4; num < 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    sum += num;
  }
}
console.log(sum);

