type PropertiesProps = {
  information: string;
}

type GalleryProps = {
    namemodels: string[];
}

type ModelInfoProps = {
    namemodel: string;
    information: string[];
}

type CurrentInformationProps = {
    isVisible: string;
    propertiesmodel: string[];
}

type SceneProps = {
    namemodel: string;
}

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/* Export all type on the file */
export type {
    GalleryProps,
    CurrentInformationProps,
    SceneProps,
    ModelInfoProps,
    PropertiesProps,
    ButtonProps
}
