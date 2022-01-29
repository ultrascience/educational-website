// Type used on gallery
import React from "react";

type ModelTypeGallery = {
    _id: string;
    name: string
    image: ModelType["image"];
};

type ModelType = {
    _id: string;
    name: string;
    image: {
        data: Buffer;
        contentType: string;
    };
    clasification: string;
    properties: {
        chemical: {
            chemical_formula: {
                data: Buffer;
                contentType: string;
            };
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
        introduction: {
            etymology: string;
            atmosphere: string;
            applications: string;
            main_locations: string;
            diffractogram: string;
        };
    };
    references: string;
}

// Type props used on gallery to select current model
type ArrayGalleryProps = {
    gallery: ModelTypeGallery[];
    idModelSelected: string;
    setIdModelSelected: (id: string) => void;
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
    information: ModelType['properties']['introduction'];
};


type SceneProps = {
    idModelSelected: string;

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
    ModelTypeGallery,
    ModelType,
    ArrayGalleryProps,
    CurrentInformationProps,
    SceneProps,
    PhysicalProps,
    ChemicalProps,
    CrystallographicProps,
    IntroductionProps,
    OpticalProps,
    BarIconsProps,
    ButtonProps,
};
