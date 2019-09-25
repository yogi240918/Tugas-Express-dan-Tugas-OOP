const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];

const obj1 = { Nama: 'Yogi', Umur: '15' };
const obj2 = { Tinggal: 'Jakarta, Gang Kingkit IX', Kelamin: 'Laki Laki' }
const obj3 = { Tanggal: 'Jakarta, 12 September 2019 Di tanggal ini dan di hari ini saya benar-benar kecewa seseorang yg aku sayangi ternyata dia tidak menyayangi ku:( ' }
const obj4 = { note: 'Jangan jadi orang yg mudah menyerah karna menyerah hanya untuk orang yang lemah!' };

const merge = {...obj1, ...obj2, ...obj3, ...obj4};

console.log(arr1.concat(arr2));
console.log(merge);
