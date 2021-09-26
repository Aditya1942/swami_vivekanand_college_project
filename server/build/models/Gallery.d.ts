export interface Gallery {
    _id?: number;
    title: string;
    folderPath: string;
    images: Image[];
}
export interface Image {
    _id?: number;
    img: string;
    title: string;
    isBig: boolean;
}
