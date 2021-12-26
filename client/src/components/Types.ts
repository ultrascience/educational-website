type PropertiesProps = {
  information: string;
};

type GalleryProps = {
  _id: string;
  name: string;
  image: string;
};
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
  ArrayGalleryProps,
  CurrentInformationProps,
  SceneProps,
  ModelInfoProps,
  PropertiesProps,
  ButtonProps,
};
