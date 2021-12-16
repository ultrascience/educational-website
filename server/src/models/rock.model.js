// rock.model.js
import mongoose from 'mongoose';
const rocksSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    introduccion: {
        type: String,
        required: true
    },
    propiedades: {
        type: String,
        required: true
    }
});

const Rocks = mongoose.model("Rocks", rocksSchema);
export default Rocks;
