/**
 * TODO(developer): Uncomment these variables before running the sample.
 */

// Pull Subscription

const topicNameOrId = "demoPubSub";
const subscriptionNameOrId = "pullSubscription_2";

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

async function createSubscription(topicNameOrId, subscriptionNameOrId) {
  // Creates a new subscription
  await pubSubClient
    .topic(topicNameOrId)
    .createSubscription(subscriptionNameOrId);
  console.log(`Subscription ${subscriptionNameOrId} created.`);
}

createSubscription(topicNameOrId, subscriptionNameOrId);




















//pushSubscription

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */

// const topicNameOrId = "demoPubSub";
// const subscriptionNameOrId = "pushSubscription";

// // Imports the Google Cloud client library
// const { PubSub } = require("@google-cloud/pubsub");

// // Creates a client; cache this for further use
// const pubSubClient = new PubSub({
//   projectId: "assignment-388916",
//   keyFilename: "key.json",
// });

// async function createPushSubscription(topicNameOrId, subscriptionNameOrId) {
//   const options = {
//     pushConfig: {
//       // Set to an HTTPS endpoint of your choice. If necessary, register
//       // (authorize) the domain on which the server is hosted.
//       pushEndpoint: `https://${pubSubClient.projectId}.appspot.com/push`,
//     },
//   };

//   await pubSubClient
//     .topic(topicNameOrId)
//     .createSubscription(subscriptionNameOrId, options);
//   console.log(`Subscription ${subscriptionNameOrId} created.`);
// }

// createPushSubscription(topicNameOrId, subscriptionNameOrId);
