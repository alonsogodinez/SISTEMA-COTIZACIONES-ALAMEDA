module.exports.create = (req, res) => {

  models.PaperSize
    .create({
      name: req.body.name,
    })
    .then(paperSize => res.json(paperSize))
    .catch(err => res.status(503).send(err))
};


module.exports.listAll = (req, res) => {
  models.PaperSize
    .findAll()
    .then(paperSizes => res.json(paperSizes))
    .catch(err => res.status(503).send(err))
};