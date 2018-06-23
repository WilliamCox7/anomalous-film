const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = () => new Promise((resolve, reject) => {

  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);

    // gets all posts in db
    db.collection('list').find({}, (err, result) => {

      // reject if find operation fails
      if (err) reject(err);

      // sort ascending
      result = result.sort({rating: -1});

      // cast sorted result to array
      result.toArray((err, result) => err
        ? reject(err)
        : resolve(result)
      );

    });

  });

});
