/**
 * TODO(developer): Uncomment this variable before running the sample.
 */

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

const subscriptionNameOrId = "pushSubscription";
async function deleteSubscription(subscriptionNameOrId) {
  // Deletes the subscription
  await pubSubClient.subscription(subscriptionNameOrId).delete();
  console.log(`Subscription ${subscriptionNameOrId} deleted.`);
}
deleteSubscription(subscriptionNameOrId);
