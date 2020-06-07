"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require('dotenv/config');
var _Mention = require('./listeners/Mention'); var _Mention2 = _interopRequireDefault(_Mention);
var _StatusController = require('./controllers/StatusController'); var _StatusController2 = _interopRequireDefault(_StatusController);

class App {
  constructor() {
    this.tweetsListeners();
  }

  tweetsListeners() {
    _Mention2.default.on('tweet', _StatusController2.default.sendNumberCases);
  }
}

exports. default = new App();
