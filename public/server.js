const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('https://bhagavadgitaapi.in/slok/')

app.listen(process.env.PORT || 8080)