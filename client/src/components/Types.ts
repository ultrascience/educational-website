// Type used on gallery
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

// Type props used on gallery to select current model
type ArrayGalleryProps = {
    gallery: ModelTypeGallery[];
    idModelSelected: string;
    setIdModelSelected: (id: string) => void;
};

type ModelInfoProps = {
    properties: ModelType["properties"];
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


type SceneProps = {
    idModelSelected: string;

};

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

/* Export all type on the file */
export type {
    ModelTypeGallery,
    ModelType,
    ArrayGalleryProps,
    CurrentInformationProps,
    SceneProps,
    ModelInfoProps,
    PhysicalProps,
    ChemicalProps,
    CrystallographicProps,
    OpticalProps,
    ButtonProps,
};
