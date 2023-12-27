// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

async function listSubscriptions() {
  // Lists all subscriptions in the current project
  const [subscriptions] = await pubSubClient.getSubscriptions();
  console.log("Subscriptions:");
  subscriptions.forEach((subscription) => console.log(subscription.name));
}

listSubscriptions();
