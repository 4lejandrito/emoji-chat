var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var emojiStore = require('./emoji-memory');

function assignEmoji(userID) {
  var list = emojiStore.availableEmojis;

  var emojiID = list[Math.floor(Math.random() * list.length)];
  while (!emojiStore.assignEmojiToUserID(userID, emojiID)) {
    emojiID = list[Math.floor(Math.random() * list.length)];
  }

  return emojiID;
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname));

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function (socket) {

  var userID = socket.id;
  var emojiID = assignEmoji(userID);
  
  io.emit('connected', {id: userID, emoji: emojiID});
  
  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });

  socket.on('chatMessage', function (msg) {
    console.log('got a chat message', msg);
  });

});
