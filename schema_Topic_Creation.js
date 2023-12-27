const { PubSub, SchemaTypes } = require("@google-cloud/pubsub");
const fs = require("fs");

const pubSubClient = new PubSub({
  projectId: "assignment-388916",
  keyFilename: "key.json",
});

async function createAvroSchema(schemaNameOrId, avscFile) {
  try {
    const definition = fs.readFileSync(avscFile).toString();

    // Create the Avro schema in Pub/Sub
    const schema = await pubSubClient.createSchema(
      schemaNameOrId,
      SchemaTypes.Avro,
      definition
    );

    const name = await schema.getName();
    console.log(`Schema ${name} created.`);
  } catch (error) {
    console.error("Error creating Avro schema:", error);
  }
}

// Uncomment the below lines and provide the necessary values before running the function

const schemaNameOrId = "schema_1"; // Replace with your desired schema name or ID
const avscFile = "./schema.avsc"; // Replace with the path to your Avro schema file

// Call the function with the schema name/ID and Avro schema file path
createAvroSchema(schemaNameOrId, avscFile);
