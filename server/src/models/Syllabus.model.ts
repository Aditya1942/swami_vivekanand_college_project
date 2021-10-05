export interface SyllabusBody {
  title: string;
  img: string;
  subCourse: Array<SyllabuSubCourse>;
}
export interface SyllabuSubCourse {
  maniTitle: string;
  title: string;
  name: string;
  pdfs: Array<string>;
}
