import axios from 'axios';
import Twitter from '../services/twitter';

class StatusController {
  async sendNumberCases(tweet) {
    const name = tweet.user.screen_name;
    const id = tweet.id_str;

    const response = await axios.get(
      'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv'
    );

    const number_cases = response.data.split('\n')[1].split(',')[2];
    const number_deaths = response.data.split('\n')[1].split(',')[4];
    const message = `@${name} no Brasil atualmente temos ${number_cases} casos confirmados e ${number_deaths} mortes`;
    Twitter.tweetar(message, id);
  }
}
export default new StatusController();
