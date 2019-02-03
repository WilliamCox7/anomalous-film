const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = () => new Promise((resolve, reject) => {
  mongoClient.connect(mongoURI, (err, db) => {
    if (err) reject(err);
    db.collection('list').find({}, (err, result) => {
      if (err) reject(err);
      result.toArray((err, result) => {
        result = result.map((r) => {
          let rvd = new Date(r.viewed);
          r.viewDate = new Date(rvd.getFullYear(), rvd.getMonth(), rvd.getDate());
          if (!r.season) r.season = 10000;
          if (!r.episode) r.episode = 10000;
          return r;
        });
        result = result.sort(fieldSorter(['-viewDate', '-title', '-season', '-episode']));
        result = result.map((r) => {
          if (r.season === 10000) r.season = "";
          if (r.episode === 10000) r.episode = "";
          return r;
        });
        if (err) reject(err);
        resolve(result);
      });
    });
  });
});

let fieldSorter = (fields) => (a, b) => fields.map(o => {
  let dir = 1;
  if (o[0] === '-') { dir = -1; o=o.substring(1); }
  return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0);