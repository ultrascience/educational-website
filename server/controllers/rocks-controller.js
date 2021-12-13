const Rock = require('../models/rocks-model')

/* Create a new model */
createModel =
    (req, res) => {
      const body = req.body

      if (!body) {
        return res.status(400).json({
          success : false,
          error : 'You must provide a rocks',
        })
      }

      const rock = new Rock(body)

      if (!rocks) {
        return res.status(400).json({success : false, error : err})
      }

      rock.save()
          .then(() => {return res.status(201).json({
                  success : true,
                  id : rocks._id,
                  message : 'Rock created!',
                })})
          .catch(error => {return res.status(400).json({
                   error,
                   message : 'Rock not created!',
                 })})
    }

/* Get a model by its id */
getModelsById =
    async (req, res) => {
  await findOne({_id : req.params.id},
               (err, rocks) => {
                 if (err) {
                   return res.status(400).json({success : false, error : err})
                 }

                 if (!rocks) {
                   return res.status(404).json(
                       {success : false, error : `Rock not found`})
                 }
                 return res.status(200).json({success : true, data : rocks})
               })
      .catch(err => console.log(err))
}

/* Get all models */
getAllModels =
    async (req, res) => {
  await find({},
            (err, rocks) => {
              if (err) {
                return res.status(400).json({success : false, error : err})
              }
              if (!rocks.length) {
                return res.status(404).json(
                    {success : false, error : `Rock not found`})
              }
              return res.status(200).json({success : true, data : rocks})
            })
      .catch(err => console.log(err))
}

module.exports = {
  createModel,
  getModelsById,
  getAllModels
}
