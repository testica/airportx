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

app.get('/bbva-login', function (req, res) {
  //res.send('hello BBVA')
  console.log('Login BBVA - redirigiendo');
  return res.redirect('https://connect.bbva.com/sandboxconnect?client_id=app.bbva.air.exp&response_type=code&redirect_uri=https://airportx-hackathon.firebaseapp.com');
})

// Default port 30000
app.listen(process.env.PORT || 3000);