// rock.model.js
import mongoose from 'mongoose';

const modelIntroduction = new mongoose.Schema({
  etymology: {
    type: String,
    required: true,
  },
  atmosphere: {
    type: String,
    required: true,
  },
  applications: {
    type: String,
    required: true,
  },
  main_locations: {
    type: String,
    required: true,
  },
  diffractogram: {
    type: String,
    required: true,
  },

});

const chemicalProperties = new mongoose.Schema({
  molecular_weight: {
    type: String,
    required: true,
  },
  elemental_chemistry: {
    type: String,
    required: true,
  },
  chemistry_oxides: {
    type: String,
    required: true,
  },
});


const crystallographicProperties = new mongoose.Schema({
  cell_dimension: {
    type: String,
    required: true,
  },
  crystalline_system: {
    type: String,
    required: true,
  },
  x_ray_diffraction: {
    type: String,
    required: true,
  },
});


const physicalProperties = new mongoose.Schema({
  gloss: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  hardness: {
    type: String,
    required: true,
  },
  stripe: {
    type: String,
    required: true,
  },
  fracture: {
    type: String,
    required: true,
  },
  crystal_habit: {
    type: String,
    required: true,
  },
  diaphanous: {
    type: String,
    required: true,
  },
  exfoliation: {
    type: String,
    required: true,
  },
  density: {
    type: String,
    required: true,
  },
  luminescence: {
    type: String,
    required: true,
  },
  radioactivity: {
    type: String,
    required: true,
  },
});

const modelProperties = new mongoose.Schema({
  introduction: modelIntroduction,
  chemical: chemicalProperties,
  crystallographic: crystallographicProperties,
  physical: physicalProperties,
  optical: {
    type: String,
    required: true,
  }
});

const rocksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  modelo3D: {
    type: String,
    required: true
  },
  chemical_formula: {
    type: String,
    required: true
  },
  clasification: {
    type: String,
    required: true
  },
  properties: modelProperties,
  references: String,

}
  // {
  //   timestamps: true
  // }
);

const Rocks = mongoose.model("Rocks", rocksSchema);
export default Rocks;
