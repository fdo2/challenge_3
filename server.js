const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 1990;
const parser = require('parser');
// import App from "./client/app.jsx";
// import React from "react";
// import ReactDom from "ReactDom";

app.listen(port, () => {
  console.log(`Server is listening to http://localhost:${port}`)
})
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

app.use(express.static(path.join(__dirname, 'client')));

app.get("/", (req, res) => {
  res.send()
});

app.post("/f1", (req, res) => {
  var name = req.body.name;
  var email= req.body.email;
  var password = req.body.password;
  
})

app.post("/f2", (req, res) => {
  var street = req.body.street;
  var city= req.body.city;
  var state = req.body.state;
  var zipcode = req.body.zipcode;
})

app.post("/f3", (req, res) => {
  var creditcard = req.body.creditcard;
  var expirydate= req.body.expirydate;
  var cvv = req.body.cvv;
  var billingZipCode = req.body.billingzipcode;
})
