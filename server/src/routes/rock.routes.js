import { on } from 'events';
import express from 'express';
import fs from 'fs';
import path from 'path';
import Rock from '../models/rock.model';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
const rockRouter = express.Router();

var multer = require('multer');

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/'+file.fieldname;
    // Create folder if not exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);

      
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const code = uuidv4();
    const name = code + ext

    if (file.fieldname === 'modelo3D') {
      req.modelo3D = name;
    }

    if (file.fieldname === 'image') {
      req.image = name;
    }

    if (file.fieldname === 'chemical_formula') {
      req.chemical_formula = name;
    }

    cb(null, name);
  }
}
);



const fileFilter = (req, file, callback) => {
  var ext = path.extname(file.originalname);
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.glb' && ext !== '.gltf') {
    return callback(new Error('File must be a png, jpg, gif or glb,gltf'), false);
  }
  callback(null, true)
};


const upload = multer({
  storage: storageEngine,
  fileFilter
});

/* 
  * Get name of the all 3D Models
  * @returns {Object}
  * @param {Object} req
  * @param {Object} res
  * @param {Object} next
  */
rockRouter.get('/get-names', (req, res, next) => {
  Rock.find({}, 'name', function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(
      result);
  });
});

/**
 * Send the 3D model file to the client from the server
 * using the location image from the database
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 * @returns {Object}
 */
rockRouter.get('/get-model3D/:id', (req, res, next) => {
  Rock.findById(req.params.id, function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).sendFile(path.join(__dirname, '../uploads/modelo3D/' + result.modelo3D));
  });
});


/* 
 * Send the image file to the client from the server
 * using the location image from the database
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res 
 * @param {Object} next 
 * @param {String} name 
 */
rockRouter.get('/get-image/:id', (req, res, next) => {
  Rock.findById(req.params.id, function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).sendFile(path.join(__dirname, '../uploads/image/' + result.image));
  });
});


/* Get all information about single 3D Model
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
rockRouter.get("/get-rock/:id", (req, res, next) => {
  const id = req.params.id;
  Rock.findById(id, function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send(
      result);
  });
});

/* Add Single 3D Model to the Database
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */

const type = upload.fields([{
  name: 'image',
  maxCount: 1
}, {
  name: 'chemical_formula',
  maxCount: 1
}, {
  name: 'modelo3D',
  maxCount: 1
}]);

// middleware to pass to multer
function createRock(req, res, next) {

  console.log(req.body);
  let newRock = {
    name: req.body.name,
    image: req.image,
    modelo3D: req.modelo3D,
    introduction: req.body.introduction,
    clasification: req.body.clasification,
    properties: {
      chemical:
      {
        chemical_formula: req.body.chemical_formula,
        molecular_weight: req.body.molecular_weight,
        elemental_chemistry: req.body.elemental_chemistry,
        chemistry_oxides: req.body.chemistry_oxides,
      },
      crystallographic:
      {
        cell_dimension: req.body.cell_dimension,
        crystalline_system: req.body.crystalline_system,
        x_ray_diffraction: req.body.x_ray_diffraction,
      },
      physical:
      {
        gloss: req.body.gloss,
        color: req.body.color,
        hardness: req.body.hardness,
        stripe: req.body.stripe,
        fracture: req.body.fracture,
        crystal_habit: req.body.crystal_habit,
        diaphanous: req.body.diaphanous,
        exfoliation: req.body.exfoliation,
        density: req.body.density,
        luminescence: req.body.luminescence,
        radioactivity: req.body.radioactivity,
      },
      optical: req.body.optical,
    },
    references: req.body.references,
  };

  Rock.create(newRock, function(err, result) {
    if (err) {
      next(err);
    } else {
      req.modelo = result;
      next();
    }
  });
}

// Function that asign uuid
function assignCode(req, res, next) {
  req.code = uuidv4();
  next();
}

rockRouter.post("/upload", assignCode, type, createRock, (req, res, next) => {
});


/* Edit Single 3D Model
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
rockRouter.patch("/edit/:id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Rock.findByIdAndUpdate(req.params.post_id, { $set: fieldsToUpdate }, { new: true }, function(err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Rock updated successfully"
    });
  });
});


/* Delete Single 3D Model
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
rockRouter.delete("/delete/:id", (req, res, next) => {
  Rock.findByIdAndDelete(req.params.post_id, function(err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Rock deleted successfully"
    });
  });
});

export default rockRouter;
