//unlink FS = Hapus data/file

//Panggil library FS
const fs = require('fs');

/*Baca file terserah.txt apakah ada file nya?
menggunakan fs.readFile */
fs.readFile('terserah.txt', async (err, data) => {
	//jika data tidak di temukan
	if(err) return console.log("Data tidak ditemukan!");

	//Jalankan console.log dulu menggunakan await
	await console.log("Data ditemukan!")

	//Data ditemukan kita langsung eksekusi delete
	fs.unlink('terserah.txt', (err) => {
		//jika gagal delete
		if(err) return console.log("Gagal hapus data!");

		//jika berhasil delete
		console.log("Hapus data berhasil!");

	})
})