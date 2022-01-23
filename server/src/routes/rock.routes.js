import express from 'express';
import fs from 'fs';
import path from 'path';
import Rock from '../models/rock.model';

const rockRouter = express.Router();

var multer = require('multer');

const storageEngine = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, callback) {
    callback(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

// file filter for multer
const fileFilter = (req, file, callback) => {
  let pattern = /jpg|png|svg/; // reqex

  if (pattern.test(path.extname(file.originalname))) {
    callback(null, true);
  } else {
    callback('Error: not a valid file');
  }
};

const upload = multer({
  storage: storageEngine,
  fileFilter
});

/* 
  * Get name and image of the all 3D Models
  * @returns {Object}
  * @param {Object} req
  * @param {Object} res
  * @param {Object} next
  */
rockRouter.get('/get-images', (req, res, next) => {
  Rock.find({}, 'name image', function(err, result) {
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

/* 
 * Get image respect to the name
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res 
 * @param {Object} next 
 * @param {String} name 
 */
rockRouter.get('/img/:name', (req, res, next) => {
  const name = req.params.name;
  Rock.findOne({ name: name }, 'image', function(err, result) {
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
rockRouter.post("/upload", upload.single('image'), (req, res, next) => {
  // if req.body is empty
  console.log(req);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      'success': false,
      'error': 'No data was sent'
    });
  } else {
    // save new rock to the database using form data req.body.data
    let newRock = {
      name: req.body.name,
      image: {
        data: fs.readFileSync(req.file.path),
        contentType: 'image/png'
      },
      clasification: req.body.clasification,
      introduction: {
        etymology: req.body.etymology,
        atmosphere: req.body.atmosphere,
        applications: req.body.applications,
        main_locations: req.body.main_locations,
        diffractogram: req.body.diffractogram,
      },
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
          console.log(err);
          return res.status(400).send({
            'success': false,
            'error': err.message
          });
        }else {
          console.log("yeah it worked");
          return res.status(200).send({
            'success': true,
            'data': result
          });
        }
      });
    }
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
