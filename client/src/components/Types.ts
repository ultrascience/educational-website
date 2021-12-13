type GalleryProps = {
    namemodels: any[];
}

type AppProps = {
    information: string;
}
/* pasa un json con la informacion del modelo */
type ModelInformationProps = {
    nombre: string;
    propertiesmodel: any[];
}

type CurrentInformationProps = {
    isVisible: string;
    propertiesmodel: any[];
}

type SceneProps = {
    namemodel: string;
}

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export {
    GalleryProps,
    AppProps,
    ModelInformationProps,
    CurrentInformationProps,
    SceneProps,
    ButtonProps
}
