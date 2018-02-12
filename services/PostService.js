let mod = require('../server_modules');

module.exports = {
  getPosts: (req, res) => {
    mod.getPosts().then((posts) => {
      if (posts.length > 0) {
        res.status(200).send(posts);
      } else {
        res.status(500).send(posts);
      }
    });
  }
}
