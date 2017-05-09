module.exports = emojiStore

var emojiShortnames = require('./emoji-shortnames');

var emojisByUserId = {}
var userIdByEmojis = {}

var emojiStore = {
  getEmojiByUserId: function(userID) {
    return emojisByUserId[userID];
  },
  
  getUserIdByEmoji: function(emojiID) {
    return userIdByEmojis[emojiID];
  },
  
  assignEmojiToUserID: function(userID, emojiID) {
    if (getUserIdByEmoji[selection] !== null) {
      emojisByUserId[userID] = emojiID;
      userIdByEmojis[emojiID] = userID;
      return true;
    }

    return false;
  },

  availableEmojis: emojiShortnames
  
}
