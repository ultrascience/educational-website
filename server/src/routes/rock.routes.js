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

rockRouter.get('/get-chemical-formula/:id', (req, res, next) => {
  Rock.findById(req.params.id, function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).sendFile(path.join(__dirname, '../uploads/chemical_formula/' + result.chemical_formula));
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
    chemical_formula: req.chemical_formula,
    introduction: req.body.introduction,
    clasification: req.body.clasification,
    properties: {
      chemical:
      {
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

function updateRock(req, res, next) {
  const id = req.params.id;
  Rock.findById(id, function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    result.name = req.body.name;
    result.image = req.image;
    result.modelo3D = req.modelo3D;
    result.chemical_formula = req.chemical_formula;
    result.introduction = req.body.introduction;
    result.clasification = req.body.clasification;
    result.properties.chemical.molecular_weight = req.body.molecular_weight;
    result.properties.chemical.elemental_chemistry = req.body.elemental_chemistry;
    result.properties.chemical.chemistry_oxides = req.body.chemistry_oxides;
    result.properties.crystallographic.cell_dimension = req.body.cell_dimension;
    result.properties.crystallographic.crystalline_system = req.body.crystalline_system;
    result.properties.crystallographic.x_ray_diffraction = req.body.x_ray_diffraction;
    result.properties.physical.gloss = req.body.gloss;
    result.properties.physical.color = req.body.color;
    result.properties.physical.hardness = req.body.hardness;
    result.properties.physical.stripe = req.body.stripe;
    result.properties.physical.fracture = req.body.fracture;
    result.properties.physical.crystal_habit = req.body.crystal_habit;
    result.properties.physical.diaphanous = req.body.diaphanous;
    result.properties.physical.exfoliation = req.body.exfoliation;
    result.properties.physical.density = req.body.density;
    result.properties.physical.luminescence = req.body.luminescence
    result.properties.physical.radioactivity = req.body.radioactivity;
    result.properties.optical = req.body.optical;
    result.references = req.body.references;
    result.save(function(err, result) {
      if (err) {
        res.status(400).send({
          'success': false,
          'error': err.message
        });
      }
      res.set('Access-Control-Allow-Origin', '*');
      res.status(200).send(result);
    });
  });
}


/* Edit Single 3D Model
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
rockRouter.patch("/edit/:id",assignCode, type,updateRock, (req, res, next) => {

});



/* Delete Single 3D Model
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
rockRouter.delete("/delete/:id", (req, res, next) => {
  Rock.findByIdAndDelete(req.params.id, function(err, result) {
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
