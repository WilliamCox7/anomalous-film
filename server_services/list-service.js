let modules = require('../server_modules');

module.exports = {

  getList: (req, res) => {
    modules.getList().then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      res.status(500).send([]);
    });
  }

}
