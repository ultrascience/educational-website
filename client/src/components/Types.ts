type PropertiesProps = {
  information: string;
};

type GalleryProps = {
  _id: string;
  name: string;
  image: string;
};

type JsonProps = {
  name: string;
  image: string;
  clasification: string;
  introduction: {
    etymology: string;
    atmosphere: string;
    applications: string;
    main_locations: string;
    diffractogram: string;
  };
  properties: {
    chemical: {
      chemical_formula: string;
      molecular_weight: string;
      elemental_chemistry: string;
      chemistry_oxides: string;
    },
    crystallographic: 
      {
        cell_dimension: string;
        crystalline_system: string;
        x_ray_diffraction: string;
      }
    ,
    physical: {
      gloss: string;
      color: string;
      hardness: string;
      stripe: string;
      fracture: string;
      crystal_habit: string;
      diaphanous: string;
      exfoliation: string;
      density: string;
      luminescence: string;
      radioactivity: string;
    },
    optical: string;
  };
  references: string;
}


type ArrayGalleryProps = {
  gallery: GalleryProps[];
};

type ModelInfoProps = {
  namemodel: string;
  information: string[];
};

type CurrentInformationProps = {
  isVisible: string;
  propertiesmodel: string[];
};

type SceneProps = {
  namemodel: string;
};

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/* Export all type on the file */
export type {
  GalleryProps,
  JsonProps,
  ArrayGalleryProps,
  CurrentInformationProps,
  SceneProps,
  ModelInfoProps,
  PropertiesProps,
  ButtonProps,
};
