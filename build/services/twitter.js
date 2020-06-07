"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _twit = require('twit'); var _twit2 = _interopRequireDefault(_twit);
var _twitter = require('../config/twitter'); var _twitter2 = _interopRequireDefault(_twitter);

const client = new (0, _twit2.default)(_twitter2.default);

client.tweetar = (tweet, tweetId) => {
  console.log('tweet =', tweet, tweetId);

  client.post(
    'statuses/update',
    { status: tweet, in_reply_to_status_id: `${tweetId}` },
    function (error) {
      if (error) console.log('error', error);
      else console.log('Tweet enviado.');
    }
  );
};

// Exporta o cliente
exports. default = client;
