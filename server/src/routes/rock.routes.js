import express from 'express';
import Rock from '../models/rock.model';
const rockRouter = express.Router();

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

rockRouter.post('/uploadimage', multipartMiddleware, function(req, res) {
    if(req.files.image) {
        var image = req.files.image,
            name = image.name,
            type = image.mimetype;

        fs.readFile(image.path, function (err, data) {
            var imageName = name;
            var newPath = __dirname + "/../public/images/" + imageName;
            
            fs.writeFile(newPath, data, function (err) {
                if(err){
                    res.status(400).send({
                        success: false,
                        error: err.message
                    });
                }
                res.status(201).send({
                    success: true,
                    message: "Image uploaded successfully"
                });
            });
        });
    }
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
