const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (year) => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);
    db.collection('list').find({
      best: year
    }, (err, result) => {
      if (err) reject(err);
      result = result.sort({viewed: -1});
      result.toArray((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  });
});
