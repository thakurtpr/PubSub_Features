    /**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function modifyPushConfig(topicNameOrId, subscriptionNameOrId) {
  const options = {
    // Set to an HTTPS endpoint of your choice. If necessary, register
    // (authorize) the domain on which the server is hosted.
    pushEndpoint: `https://${pubSubClient.projectId}.appspot.com/push`,
  };

  await pubSubClient
    .topic(topicNameOrId)
    .subscription(subscriptionNameOrId)
    .modifyPushConfig(options);
  console.log(`Modified push config for subscription ${subscriptionNameOrId}.`);
}