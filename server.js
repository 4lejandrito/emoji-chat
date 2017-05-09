var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function (socket) {

  io.emit('connected', {id: socket.id});

  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });

  socket.on('chatMessage', function (msg) {
    console.log('got a chat message', msg);
  });

});
