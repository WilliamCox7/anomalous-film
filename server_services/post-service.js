let modules = require('../server_modules');

module.exports = {

  getPosts: (req, res) => {
    modules.getPosts().then((posts) => {
      res.status(200).send(posts);
    }).catch((error) => {
      res.status(500).send([]);
    });
  }

}
