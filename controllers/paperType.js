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
    .findAll()
    .then(paperTypes => res.json(paperTypes))
    .catch(err => res.status(503).send(err))
};



