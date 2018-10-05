const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const https = require('https');
const fs = require('fs');
const config = require('./config');
const app = module.exports = express();

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(__dirname + '/build'));

require('./routes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

const options = {
  key: fs.readFileSync(config.key),
  cert: fs.readFileSync(config.cert)
};

https.createServer(options, app)
.listen(app.get('port'), () => {
  console.log('localhost:' + app.get('port'));
});
