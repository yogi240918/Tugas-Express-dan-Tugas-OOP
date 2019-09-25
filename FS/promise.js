const seminar = 'mager';

const janjian = kondisi => new Promise((resolve, reject) => {
	if (kondisi === 'mager') {
		resolve('Saya mager mengikuti seminar');
	} else {
		reject('saya ingin mengikuti');
	}
});

janjian(seminar)
.then(res => console.log(res))
.catch(err => console.error(err));
