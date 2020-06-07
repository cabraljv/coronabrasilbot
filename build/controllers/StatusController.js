"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
var _twitter = require('../services/twitter'); var _twitter2 = _interopRequireDefault(_twitter);

class StatusController {
  async sendNumberCases(tweet) {
    const name = tweet.user.screen_name;
    const id = tweet.id_str;

    const response = await _axios2.default.get(
      'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv'
    );

    const number_cases = response.data.split('\n')[1].split(',')[2];
    const number_deaths = response.data.split('\n')[1].split(',')[4];
    const message = `@${name} no Brasil atualmente temos ${number_cases} casos confirmados e ${number_deaths} mortes`;
    _twitter2.default.tweetar(message, id);
  }
}
exports. default = new StatusController();
