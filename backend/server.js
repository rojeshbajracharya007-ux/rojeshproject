const express = require('express');
const app = express();
app.use(express.json());

let users = [];
app.post('/login', (req, res) => {
  res.send({ message: "Login success" }); // bug
});

app.listen(3000, () => console.log("Running"));
