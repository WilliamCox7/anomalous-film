const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/anomalous';

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
