const { PubSub } = require("@google-cloud/pubsub");
const express = require("express");
const app = express();
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});
// const topicName = "demoPubSub"; //topic that we have created in pubSub
const subscriptionNameOrId = "demo_PubSub";
app.use(express.json());

// const projectId = "assignment-388916"; // Replace with your GCP project ID
const subscriptionName = "demo_PubSub"; // Replace with your subscription name
const subscriptionName2 = "pullSubscription"; // Replace with your subscription name

// Create Pub/Sub clients
const pubSubClient1 = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});
const pubSubClient2 = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

// Create subscribers
const subscriber1 = pubSubClient1.subscription(subscriptionName);
const subscriber2 = pubSubClient2.subscription(subscriptionName2);

// Listen for messages in each subscriber
subscriber1.on("message", messageHandler1);
subscriber2.on("message", messageHandler2);

// Message handlers for each subscriber
function messageHandler1(message) {
  console.log("Subscriber 1 received message:", message.data.toString());
  // Implement logic to process the message for Subscriber 1
  message.ack(); // Acknowledge the message once processed
}

function messageHandler2(message) {
  console.log("Subscriber 2 received message:", message.data.toString());
  // Implement logic to process the message for Subscriber 2
  message.ack(); // Acknowledge the message once processed
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const pubSubClient3 = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

const subscriber3 = pubSubClient3.subscription("pullSubscription_2");

subscriber3.on("message", messageHandler3);

function messageHandler3(message) {
  console.log("Subscriber 3 Received the message:", message.data.toString());
  message.ack();
}
