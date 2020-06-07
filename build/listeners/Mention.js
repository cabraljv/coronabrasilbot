"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _twitter = require('../services/twitter'); var _twitter2 = _interopRequireDefault(_twitter);

const stream = _twitter2.default.stream('statuses/filter', {
  track: '@CoronaBrasilBot',
});

exports. default = stream;
