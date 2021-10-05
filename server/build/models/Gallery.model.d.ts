export interface GalleryModel {
    _id?: number;
    title: string;
    folderPath: string;
    images: GalleryImageModel[];
}
export interface GalleryImageModel {
    _id?: number;
    img: string;
    title: string;
    isBig: boolean;
}
