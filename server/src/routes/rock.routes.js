import express from 'express';
import Rock from '../models/rock.model';
const rockRouter = express.Router();
import fs from 'fs';
import path from 'path';

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

  if (pattern.test (path.extname (file.originalname))) {
    callback (null, true);
  } else {
    callback ('Error: not a valid file');
  }
};

const upload = multer ({
  storage: storageEngine,
  fileFilter  
});

rockRouter.get('/info', (req, res, next) => {
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

/* Get all Rocks */
rockRouter.get('/', (req, res, next) => {
  Rock.find({}, function(err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.status(200).send({
      'success': true,
      'data': result
    });
  });
});

/* Get Single Rock */
rockRouter.get("/:post_id", (req, res, next) => {
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


/* Add Single Rock */
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

/* Edit Single Rock */
rockRouter.patch("/:post_id", (req, res, next) => {
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

/* Delete Single Rock */
rockRouter.delete("/:post_id", (req, res, next) => {
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
