const express = require("express");
const app = express();

app.use(express.json());

app.post("/push", (req, res) => {
  console.log("Received push notification:", req.body);

  res.status(200).send("Received the message!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
