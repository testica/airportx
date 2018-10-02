var express = require('express')
var app = express()
var request = require('request-promise');

const bbva_authorization = "Basic YXBwLmJidmEuYWlyLmV4cDp2MFJ6YkRoQ0FvTzNTbGNaYndHZnRoWGQzNjIzNThHVWRWd3hnTjhJVW1NZ3lsa2R0V1hNUm9HVlFxa2FueTN1"

app.post('/facebook-auth', function (req, res) {
  res.send('hello world')
})

// BBVA Experiment
// app.post('/bbva', (req, res) => {
//   request({
//     uri: 'https://connect.bbva.com/token?grant_type=client_credentials',
//     method: 'POST',
//     headers: { Authorization: bbva_authorization, 'Content-Type': 'application/json' },
//     json: true
//   }).then(response => res.send(response));
// });

app.listen(3000);