const env = require('dotenv').config();
const config = require('../config');
const mongoClient = require('mongodb').MongoClient;
const mongoURI =  (config.mongoURI || env.MONGO);

module.exports = () => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {
      var collection = db.collection('posts');
      collection.find({}, (err, result) => {
        result = result.sort({id: 1});
        result.toArray((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
          db.close();
        });
      })
    });
  });
}
