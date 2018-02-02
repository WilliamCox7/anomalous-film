const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = module.exports = express();

app.set('port', (process.env.PORT || config.port));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/build'));

app.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
