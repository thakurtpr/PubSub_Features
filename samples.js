

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

async function quickstart(
  projectId = 'your-project-id', // Your Google Cloud Platform project ID
  topicNameOrId = 'my-topic', // Name for the new topic to create
  subscriptionName = 'my-sub' // Name for the new subscription to create
) {
  // Instantiates a client
  const pubsub = new PubSub({projectId});

  // Creates a new topic
  const [topic] = await pubsub.createTopic(topicNameOrId);
  console.log(`Topic ${topic.name} created.`);

  // Creates a subscription on that new topic
  const [subscription] = await topic.createSubscription(subscriptionName);

  // Receive callbacks for new messages on the subscription
  subscription.on('message', message => {
    console.log('Received message:', message.data.toString());
    process.exit(0);
  });

  // Receive callbacks for errors on the subscription
  subscription.on('error', error => {
    console.error('Received error:', error);
    process.exit(1);
  });

  // Send a message to the topic
  topic.publishMessage({data: Buffer.from('Test message!')});
}




//In Details it is given below







// To create A topic:

/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopic(topicNameOrId) {
  // Creates a new topic
  await pubSubClient.createTopic(topicNameOrId);
  console.log(`Topic ${topicNameOrId} created.`);
}

//To publish a message

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
// const data = JSON.stringify({foo: 'bar'});

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function publishMessage(topicNameOrId, data) {
  // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({ data: dataBuffer });
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    process.exitCode = 1;
  }
}

//To create a schema

/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';
// const avscFile = 'path/to/an/avro/schema/file/(.avsc)/formatted/in/json';

// Imports the Google Cloud client library
const { PubSub, SchemaTypes } = require("@google-cloud/pubsub");

const fs = require("fs");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createAvroSchema(schemaNameOrId, avscFile) {
  const definition = fs.readFileSync(avscFile).toString();
  const schema = await pubSubClient.createSchema(
    schemaNameOrId,
    SchemaTypes.Avro,
    definition
  );

  const name = await schema.getName();
  console.log(`Schema ${name} created.`);
}

//Delete A Schema

/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function deleteSchema(schemaNameOrId) {
  const schema = pubSubClient.schema(schemaNameOrId);
  const name = await schema.getName();
  await schema.delete();
  console.log(`Schema ${name} deleted.`);
}

//View The Details Of Schema

/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
// const schemaNameOrId = 'YOUR_SCHEMA_NAME_OR_ID';

// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function getSchema(schemaNameOrId) {
  const schema = pubSubClient.schema(schemaNameOrId);
  const info = await schema.get();
  const fullName = await schema.getName();
  console.log(`Schema ${fullName} info: ${JSON.stringify(info, null, 4)}.`);
}











