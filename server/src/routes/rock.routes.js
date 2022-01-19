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
  Rock.findById(req.params.post_id, function(err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result
    });
  });
});


/* Add Single 3D Model to the Database
 * @returns {Object}
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
rockRouter.post("/upload", upload.single('image'), (req, res, next) => {
  console.log(req);
  let newRock = {
    name: req.body.name,
    image: {
      data: fs.readFileSync(req.file.path),
      contentType: 'image/png'
    },
    clasification: req.body.clasification,
    introduction: req.body.introduction,
    properties: req.body.properties,
    references: req.body.references
  };
  Rock.create(newRock, function(err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(201).send({
      success: true,
      data: result,
      message: "Rock created successfully"
    });
  });
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
