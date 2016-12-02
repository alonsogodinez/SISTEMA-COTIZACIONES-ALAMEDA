const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.PaperType
    .create({
      name: req.body.name,
    })
    .then(paperType => res.json(paperType))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.PaperType
    .findAll({raw:true})
    .then(paperTypes => requestHelper.renderOrJSON(req, res, {paperTypes}, 'paper/type'))
    .catch(err => res.status(503).send(err))
};



