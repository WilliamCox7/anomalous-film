const config = require('../config');
const mongoClient = require('mongodb').MongoClient;
const uri = require('./get-mongo-uri')();
const mongoURI =  (config.mongoURI || uri);

module.exports = () => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(uri, (err, db) => {
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
