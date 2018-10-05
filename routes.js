module.exports = (app) => {

  app.get('/api/list', (req, res) => {
    require('./modules/get-list')()
    .then((list) => res.status(200).send(list))
    .catch((err) => res.status(500).send(err));
  });

}
