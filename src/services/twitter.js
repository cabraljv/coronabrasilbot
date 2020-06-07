import Twitter from 'twit';
import twitterConfig from '../config/twitter';

const client = new Twitter(twitterConfig);

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
export default client;
