export interface CourseModel {
    title: string;
    img: string;
    subCourse: SubCourse[];
    date?: string;
}
export interface SubCourse {
    maniTitle: string;
    title: string;
    name: string;
    _id: string;
}
export interface CourseDetailsModel {
    subjects: Subjects;
    _id?: string;
    title: string;
    maniTitle: string;
    name: string;
    futureScope: string[];
    description: string;
    eligibility: string;
    afterThisCourse: string;
    courseDuration: string;
    date?: string;
}
export interface Subjects {
    subjects: any[];
    semester: Semester[];
}
export interface Semester {
    title: string;
    subjects: string[];
    _id?: string;
}
