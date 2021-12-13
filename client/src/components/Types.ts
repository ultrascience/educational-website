type GalleryProps = {
    namemodels: string[];
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
    ButtonProps
}
