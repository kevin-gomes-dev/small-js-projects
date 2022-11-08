'use strict';

// Testing some stuff. Currently supports GET, PUT for endpoint1,
// and supports an ID of 5 digits exactly
// ex: http://localhost:3000/endpoint1/12345

const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
  res.send(`GET route on endpoint1! Basically the router makes
  "/" in code always start at /endpoint1, or rather,
  it considers it as the home directory. Based on name in app.js`);
});

router.get('/:id([0-9]{5})',(req,res) => {
  res.send('id passed is: ' + req.params.id);
});

router.put('/',(req,res) => {
  res.send('PUT route on endpoint1!');
});

module.exports = router;