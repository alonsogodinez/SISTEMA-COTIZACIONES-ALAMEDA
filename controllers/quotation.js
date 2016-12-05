const requestHelper = require('../helpers/requestHelper');


module.exports.listAll = (req, res) => {

  const ctx = {};
  models.Quotation
    .findAll({raw:true})
    .then(quotations => {
      ctx.quotations = quotations;
      return models.PaperSize.findAll({raw: true})
    })
    .then(paperSizes => {
      ctx.paperSizes = paperSizes;
      return models.PaperType.findAll({raw: true})
    })
    .then(paperTypes => {
      ctx.paperTypes = paperTypes;
      return models.PhotolithSize.findAll({raw: true})
    })
    .then(photolithSizes => {
      ctx.photolithSizes = photolithSizes;
      return models.PlasticizingClass.findAll({raw: true})
    })
    .then(plasticizingClasses => {
      ctx.plasticizingClasses = plasticizingClasses;
      return models.PlasticizingSize.findAll({raw: true})
    })
    .then(plasticizingSizes => {
      ctx.plasticizingSizes = plasticizingSizes;
      return models.PlateSize.findAll({raw: true})
    })
    .then(plateSizes => {
      ctx.plateSizes = plateSizes;
      return models.PrintSize.findAll({raw: true})
    })
    .then(printSizes => {
      ctx.printSizes = printSizes;
      requestHelper.renderOrJSON(req, res, ctx, 'quotation')
    })


};