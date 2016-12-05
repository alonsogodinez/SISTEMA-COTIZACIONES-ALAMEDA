const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.Print
    .create({
      quantity: req.body.quantity,
      PrintSizeId: req.body.printSize,
      price: req.body.price

    })
    .then(print => res.json(print))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  const ctx = {};

  models.Print
    .findAll({raw:true, include: [models.PrintSize]})
    .then(prints => {
      ctx.prints = prints;
      return models.PrintSize.findAll({raw:true});

    })
    .then(printSizes => {
      ctx.printSizes = printSizes;
      return requestHelper.renderOrJSON(req, res, ctx, 'print')

    })
    .catch(err => res.status(503).send(err))
};