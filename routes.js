module.exports = (app) => {

  app.get('/api/all', (req, res) => {
    require('./modules/get-all')(req.body)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
  });

}
