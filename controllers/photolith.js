const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.Photolith
    .create({
      quantity: req.body.quantity,
      PhotolithSizeId: req.body.photolithSize,
      price: req.body.price

    })
    .then(photolith => res.json(photolith))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  const ctx = {};

  models.Photolith
    .findAll({raw: true, include: [models.PhotolithSize]})
    .then(photoliths => {
      ctx.photoliths = photoliths;
      return models.PhotolithSize.findAll({raw: true})
    })
    .then(photolithSizes => {
      ctx.photolithSizes = photolithSizes;
      return requestHelper.renderOrJSON(req, res, ctx, 'photolith')
    })
    .catch(err => res.status(503).send(err))
};