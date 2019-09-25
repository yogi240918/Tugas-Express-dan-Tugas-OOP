const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
	res.send('Hallo aku express!');
});

app.get('/login', (req, res) => {
	res.send('Login!');
});

app.post('/register', (req, res) => {
	res.send('Request POST for register!')
})

app.listen(port, ()=> console.log(`App listen on port $(port)`))