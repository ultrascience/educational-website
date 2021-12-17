// rock.model.js
import mongoose from 'mongoose';
const rocksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    properties: [{ chemical: String,
    physical: [{lustre: String, color: String } ],
    optical: String}],
});

const Rocks = mongoose.model("Rocks", rocksSchema);
export default Rocks;
