const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PlasticizingSize
    .create({
      name: req.body.name
    })
    .then(plasticizingSize => res.json(plasticizingSize))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {
  models.PlasticizingSize
    .findAll({raw: true})
    .then(plasticizingSizes => requestHelper.renderOrJSON(req, res, {plasticizingSizes}, 'plasticizing/size'))
    .catch(err => res.status(503).send(err))
};
