const express = require("express");
const { PubSub } = require("@google-cloud/pubsub");

const app = express();
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});
// const topicName = "demoPubSub"; //topic that we have created in pubSub
const subscriptionNameOrId = "pullSubscription";
const timeout = 60;
app.use(express.json());

app.get("/getMessages", (req, res) => {
function listenForMessages(subscriptionNameOrId, timeout) {
  // References an existing subscription
  const subscriber = pubSubClient.subscription(subscriptionNameOrId);
  // Create an event handler to handle messages
  let messageCount = 0;
  const messageHandler = (message) => {
    console.log(`Received message ${message.id}:`);
    console.log(`\tData: ${message.data}`);
    console.log(`\tAttributes: ${message.attributes}`);
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message

    message.ack();
    console.log(message.data.toString());
    res.status(200).json({
      success: true,
      message: message.data.toString(),
    });
  };

  // Listen for new messages until timeout is hit
  subscriber.on("message", messageHandler);

  // Wait a while for the subscription to run. (Part of the sample only.)
  setTimeout(() => {
    subscription.removeListener("message", messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}
listenForMessages(subscriptionNameOrId, timeout);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
