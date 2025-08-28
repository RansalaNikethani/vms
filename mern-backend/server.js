const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); //middleware function

//connection to our database.
mongoose
  .connect("mongodb://localhost:27017/vms")
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Could not connect to MongoDB...", err));

//create visitor schema
const VisitorSchema = new mongoose.Schema({
    name: String,
    nic: String,
    contact: String,
    address: String,
    email: String,
    company: String,
});

//create visitor Model
const Visitor = new mongoose.model("Visitor", VisitorSchema);

app.post('/api/visitors', (req,res) => {
    Visitor.create(req.body)
        .then((visitor) => res.status(201).send(visitor))
        .catch((err) => res.status(400).send("Error saving visitor"))
});

app.get('/api/visitors', (req, res) => {
    Visitor.find()
        .then((visitors) => res.status(200).send(visitors))
        .catch((err) => res.status(500).send("Error fetching visitors"))
});

  // our endpoint
app.get('/', (req, res) => {
    res.send("hello this is response");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});