const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PlasticizingClass
    .create({
      name: req.body.name
    })
    .then(plasticizingClass => res.json(plasticizingClass))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {

  models.PlasticizingClass
    .findAll({raw:true})
    .then(plasticizingClasses => requestHelper.renderOrJSON(req, res, {plasticizingClasses}, 'plasticizing/class'))
    .catch(err => res.status(503).send(err))
};
