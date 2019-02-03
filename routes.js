module.exports = (app) => {

  app.get('/api/all', (req, res) => {
    require('./modules/get-all')()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

  app.get('/api/best-picture/:year', (req, res) => {
    require('./modules/get-best-picture')(req.params.year)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

}
