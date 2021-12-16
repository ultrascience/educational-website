import express from 'express';
import Rock from '../models/rock.model;
const rocksRouter = express.Router();

/* Get all Rocks */
rocksRouter.get('/', (req, res, next) => {
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
rocksRouter.get("/:post_id", (req, res, next) => {
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
rocksRouter.post("/", (req, res, next) => {
    let newRock = {
        title: req.body.title,
        introduccion: req.body.introduccion,
        propiedades: req.body.propiedades
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

/* Edit Single Rock */
rocksRouter.patch("/:post_id", (req, res, next) => {
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
rocksRouter.delete("/:post_id", (req, res, next) => {
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

export default rocksRouter;
