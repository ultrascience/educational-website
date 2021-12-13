const express = require('express');
const RocksCtrl = require('../controllers/rocks-controller')

const router = express.Router();

// Get a model by id
router.get('/rocks:id', RocksCtrl.getModelsById);

// Get alls models
router.get('/rocks', RocksCtrl.getAllModels);

// Create a new model
router.post('/rocks', RocksCtrl.createModel);

// router.post('/rock', RocksController.create);
// router.put('/rocks/:id', RocksController.update);
// router.delete('/rocks/:id', RocksController.delete);

module.exports = router;
