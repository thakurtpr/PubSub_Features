// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

async function listAllTopics() {
  // Lists all topics in the current project
  const [topics] = await pubSubClient.getTopics();
  //  console.log(await pubSubClient.getTopics());
  console.log("Topics:");
  //   console.log(topics[0].name);

  topics.forEach((topic) => console.log(topic.name));
}
listAllTopics();
