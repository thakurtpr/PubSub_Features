const express = require("express");
const { PubSub } = require("@google-cloud/pubsub");

const app = express();
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

const subscriptionName = "test_Topic-sub";
const messagecount_thrsld = 10; // Number of messages to process
const timeout_cnd = 15; // Timeout duration in milliseconds (e.g., 60 seconds)

app.get("/pull", async (req, res) => {
  try {
    const subscriber = pubSubClient.subscription(subscriptionName);
    let messageCount = 0;
    let timeout;
    let messageData = {};
    const messageHandler = (message) => {
      console.log(`Received message ${message.id}:`);
      console.log(`\tData: ${message.data}`);
      console.log(`\tAttributes: ${message.attributes}`);
      messageCount += 1;
      messageData += message.data.toString();
      message.ack();

      console.log(messageData);

      // Check if all expected messages have been processed or timeout has occurred
      if (messageCount === messagecount_thrsld) {
        clearTimeout(timeout);
        res.status(200).json({
          success: "true",
          message: "Messages pulled and processed.",
          data: `Messages Are : - ${messageData}`,
        });
        subscriber.removeListener("message", messageHandler);
      }
    };

    // Subscribe to messages
    subscriber.on("message", messageHandler);

    // Set a timeout to prevent waiting indefinitely
    timeout = setTimeout(() => {
      res.status(200).json({
        success: true,
        message: "Timeout reached. Messages processed so far: " + messageCount,
        data: `Messages Are :- ${messageData}`,
      });
      subscriber.removeListener("message", messageHandler);
    }, timeout_cnd * 1000);
  } catch (error) {
    console.error("Error pulling messages:", error);
    res.status(500).json({ error: "Failed to pull messages." });
  }
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
