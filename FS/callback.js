const kendaraan = (motor, mobil, callback) => {
	return callback(motor, mobil);
}

const dataKendaraan = kendaraan( ' Legenda', 'Kijang', (motor, mobil) => {
	return mobil + motor;
});

console.log(dataKendaraan);