const requestHelper = require('../helpers/requestHelper');

module.exports.create = (req, res) => {

  models.Paper
    .create({
      quantity: req.body.quantity,
      PaperTypeId: req.body.paperType,
      PaperSizeId: req.body.paperSize,
      price: req.body.price

    })
    .then(paper => res.json(paper))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {

  const ctx = {};

  const where = req.query;

  models.Paper
    .findAll({raw: true, where, include: [models.PaperType, models.PaperSize]})

    .then(papers => {
      console.log('papers',papers)
      ctx.papers = papers;
      return models.PaperSize.findAll({raw: true})
    })

    .then(paperSizes => {
      ctx.paperSizes = paperSizes;
      return models.PaperType.findAll({raw: true})
    })

    .then(papersTypes => {

      ctx.paperTypes = papersTypes;
      requestHelper.renderOrJSON(req, res, ctx, 'paper')
    })
    .catch(err => res.status(503).send(err))
};
