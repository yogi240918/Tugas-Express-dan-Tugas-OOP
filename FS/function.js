//const tambah = (satu,dua)=>{
//    return satu+dua
//}

// module.exports = {
//     fungsiTambah : (satu,dua)=>{
//         return satu+dua
//     },
//     fungsiKali : (satu,dua)=>{
//         return satu*dua
//     },
// }

class Mobil {
    constructor(tipe, warna){
        this.tipe = tipe
        this.warna = warna
    }

    jalankan(){
        console.log("jalankan mobil "+this.tipe+" yang warnanya "+ this.warna)
    }

    berhenti (kondisi){
        if(konsidi == "behenti"){
            return " mobil "+this.tipe+" yang warnanya "+ this.warna+" sudah berhenti"
        }else{
            return " mobil "+this.tipe+" yang warnanya "+ this.warna+" masih jalan"
        }
    }
}

const classMobil = new Mobil('Jeep','Pink')
console.log(classMobil.jalankan())