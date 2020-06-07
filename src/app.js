import 'dotenv/config';
import MentionListener from './listeners/Mention';
import StatusController from './controllers/StatusController';

class App {
  constructor() {
    // this.tweetsListeners();
    StatusController.sendNumberCases();
  }

  tweetsListeners() {
    MentionListener.on('tweet', StatusController.sendNumberCases);
  }
}

export default new App();
