const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();
console.log(mongoURI);

module.exports = () => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);
    db.collection('list').find({}, (err, result) => {
      if (err) reject(err);
      result = result.sort({rating: -1});
      result.toArray((err, result) => err
        ? reject(err)
        : resolve(result)
      );
    });
  });
});
