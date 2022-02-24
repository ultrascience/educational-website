// Type used on gallery
import React from "react";

type ModelTypeGallery = {
  _id: string;
  name: string
};

type ModelType = {
  _id: string;
  name: string;
  introduction: string;
  image: {
    data: Buffer;
    contentType: string;
  };
  modelo3D: {
    data: Buffer;
    contentType: string;
  };
  chemical_formula: {
    data: Buffer;
    contentType: string;
  };
  formula: string;
  clasification: string;
  properties: {
    chemical: {
      molecular_weight: string;
      elemental_chemistry: string;
      chemistry_oxides: string;
    },
    crystallographic:
    {
      cell_dimension: string;
      crystalline_system: string;
      x_ray_diffraction: string;
    },
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
    optical: string,
  };
  references: string;
}

// Type props used on gallery to select current model
type ArrayGalleryProps = {
  gallery: ModelTypeGallery[];
};

type Modelo3DProps = {
  idModelSelected: string;
  type: "modelo3D" | "chemical_formula";
};

type BarIconsProps = {
  setVisible: (visible: string) => void;
};
type CurrentInformationProps = {
  isVisible: string;
  properties: ModelType['properties'];
};


type PhysicalProps = {
  information: ModelType['properties']['physical'];
};

type ChemicalProps = {
  information: ModelType['properties']['chemical'];
};

type CrystallographicProps = {
  information: ModelType['properties']['crystallographic'];
};

type OpticalProps = {
  information: ModelType['properties']['optical'];
};

type IntroductionProps = {
  information: ModelType['introduction'];
};


type SceneProps = {
  idModelSelected: string;

};


type GenerateInputsFileProps = {
  dictionary: {
    [llave: string]: (e: React.ChangeEvent<HTMLInputElement>) => void  | string;
  }
};


type GenerateInputsProps = {
  dictionary: {
    [llave: string]: string;
  };
  title: string;
};

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'icon' | 'submit' | 'unstyled';
  icon?: string;
  text?: string;
};

/* Export all type on the file */
export type {
  GenerateInputsFileProps,
  GenerateInputsProps,
  ModelTypeGallery,
  ModelType,
  ArrayGalleryProps,
  CurrentInformationProps,
  SceneProps,
  PhysicalProps,
  ChemicalProps,
  CrystallographicProps,
  Modelo3DProps,
  IntroductionProps,
  OpticalProps,
  BarIconsProps,
  ButtonProps,
};
