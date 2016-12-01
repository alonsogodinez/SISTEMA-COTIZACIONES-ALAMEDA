module.exports.create = (req, res) => {

  models.PlateSize
    .create({
      name: req.body.name
    })
    .then(plateSize => res.json(plateSize))
    .catch(err => res.status(503).send(err))
};

module.exports.listAll = (req, res) => {
  models.PlateSize
    .findAll()
    .then(plateSizes => res.json(plateSizes))
    .catch(err => res.status(503).send(err))
};
