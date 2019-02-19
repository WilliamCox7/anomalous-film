module.exports = (app) => {

  app.get('/api/review', (req, res) => {
    require('./modules/get')('review')
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.get('/api/watch', (req, res) => {
    require('./modules/get')('watch')
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.get('/api/best-picture/:year', (req, res) => {
    require('./modules/get-best-picture')(req.params.year)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

}
