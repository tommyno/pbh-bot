var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Jess, dette er PBH');
});

app.get('/callback', function (req, res) {
  res.send('Calling me, calling you');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
