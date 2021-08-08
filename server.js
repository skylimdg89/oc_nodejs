const express = require('express');
const app = express();

app.listen(3000, function(){
	console.log('listening on 3000');
});

app.get('/kingdomofwind', function(req, res){
	res.send('Welcome to Kingdom of Wind Yeonhwa');
});

app.get('/calc', function(req, res){
	res.send('Canculate your exp per hour');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
