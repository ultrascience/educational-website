import express from 'express';
import Rock from '../models/rock.model';
const rockRouter = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

rockRouter.get('/info', (req, res, next) => {
    Rock.find({},'name image' , function(err, result){
        if(err){
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
    Rock.find({} , function(err, result){
        if(err){
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
    Rock.findById(req.params.post_id, function (err, result) {
        if(err){
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
rockRouter.post("/", (req, res, next) => {
    let newRock = {
        name: req.body.name,
        image: req.body.image,
        clasification: req.body.clasification,
        introduction: req.body.introduction,
        properties: req.body.properties,
        references: req.body.references
    };
    Rock.create(newRock, function(err, result) {
        if(err){
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

/* Upload image of rock on path: /home/Github/current/client/public/images*/
rockRouter.post('/uploadimage',upload.single('selectedFile'),function(req, res) {
    res.status(200).send({
        success: true,
        data: req.file.filename
    });
});

/* Edit Single Rock */
rockRouter.patch("/:post_id", (req, res, next) => {
    let fieldsToUpdate = req.body;
    Rock.findByIdAndUpdate(req.params.post_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
        if(err){
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
    Rock.findByIdAndDelete(req.params.post_id, function(err, result){
        if(err){
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
