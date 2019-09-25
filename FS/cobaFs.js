//proses pemanggilan library fs
const fs = require('fs')

console.log('start reading file...')

//proses readFile text.txt
fs.readFile('text.txt', 'utf-8', (err, content) =>{
    //untuk handle error
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }

    //lakukan sesuatu disini

    console.log("yeay berhasil! Datanya bro: " +content);
})

console.log('end of the file')