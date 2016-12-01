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
    .findAll()
    .then(plasticizingClasses => res.json(plasticizingClasses))
    .catch(err => res.status(503).send(err))
};
