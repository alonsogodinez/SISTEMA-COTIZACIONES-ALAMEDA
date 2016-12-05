const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PhotolithSize
    .create({
      name: req.body.name
    })
    .then(photolithSize => res.json(photolithSize))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {
  models.PhotolithSize
    .findAll({raw:true})
    .then(photolithSizes => requestHelper.renderOrJSON(req, res, {photolithSizes}, 'photolith/size'))
    .catch(err => res.status(503).send(err))
};
