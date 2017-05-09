
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
    if (userIdByEmojis[emojiID] !== null) {
      emojisByUserId[userID] = emojiID;
      userIdByEmojis[emojiID] = userID;
      return true;
    }

    return false;
  },

  availableEmojis: emojiShortnames

}

module.exports = emojiStore;
