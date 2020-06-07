import Twitter from '../services/twitter';

const stream = Twitter.stream('statuses/filter', {
  track: '@CoronaBrasilBot',
});

export default stream;
