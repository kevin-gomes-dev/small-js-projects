'use strict';
// To use HTML file that also uses JS files...
/*
  1. use app.use('pathOfJSFiles',
  express.static(path.join(__dirname,'pathOfJSFiles')));
  2. use app.get('endpoint',(req,res) => {
    res.sendFile(path.join(__dirname,'pathOfHTMLFile'));
  })
*/

const express = require('express');
const app = express();
const path = require('path');
const endpoint1 = require('./src/endpoint1.js');

// Example of middleware. Since no path given, happens on ALL requests
// Simply logs Date.now() whenever a request is done.
app.use((req,res,next) => {
  console.log(`Request received! Datetime is ${Date.now()}`);
  next();
});

app.use('/endpoint1',endpoint1);

app.use('/src', express.static(path.join(__dirname,'./src')));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.post('/',function(req,res) {
  res.send('Post request success!')
});

app.put('/',function(req,res) {
  res.send('Put request success!')
});

app.delete('/',function(req,res) {
  res.send('Delete request success!')
});

// For other routes could use this:
// app.get('*',(req,res) => {
//   res.send('This is an invalid URL. Please check and try again.');
//   console.log('Invalid URL used!')
// });

app.listen(3000,() => {
  console.log('Running on port 3000');
});