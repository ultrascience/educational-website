// rock.model.js
import mongoose from 'mongoose';
const rocksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  clasification: {
    type: String,
    required: true
  },
  introduction: [{
    etymology: String,
    atmosphere: String,
    applications: String,
    main_locations: String,
    diffractogram: String

  }],
  properties: [{
    chemical: [{

      chemical_formula: String,
      molecular_weight: String,
      elemental_chemistry: String,
      chemistry_oxides: String
    }],
    crystallographic: [{
      cell_dimension: String,
      crystalline_system: String,
      x_ray_diffraction: String
    }],
    physical: [{
      gloss: String,
      color: String,
      hardness: String,
      stripe: String,
      fracture: String,
      crystal_habit: String,
      diaphanous: String,
      exfoliation: String,
      density: String,
      luminescence: String,
      radioactivity: String,
    }],
    optical: String,
  }],
  references: String
});

const Rocks = mongoose.model("Rocks", rocksSchema);
export default Rocks;
