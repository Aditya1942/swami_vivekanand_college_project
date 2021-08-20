export const CoursesList = [
  {
    id: 1,
    title: "Computer Science",
    img: "cs.jpg",

    subCourse: [
      { id: 1, maniTitle: "B.C.A.", title: "B.C.A.", name: "bca" },
      { id: 2, maniTitle: "B.SC.(IT)", title: "B.SC.(IT)", name: "bcsit" },
      {
        id: 3,
        maniTitle: "M.SC.(IT & CS)",
        title: "M.SC.(IT & CS)",
        name: "mscit",
      },
    ],
  },
  {
    id: 2,
    title: "Science",
    img: "science.jpg",
    subCourse: [
      {
        id: 1,
        maniTitle: "Bachelor of Science(B.Sc)",
        title: "Bachelor of Science(B.Sc)",
        name: "bsc",
      },
      {
        id: 2,
        maniTitle: "Bachelor of Science(B.Sc)",
        title: "Chemistry",
        name: "bsc",
      },
      {
        id: 3,
        maniTitle: "Bachelor of Science(B.Sc)",
        title: "Physics",
        name: "bsc",
      },
      {
        id: 4,
        maniTitle: "Bachelor of Science(B.Sc)",
        title: "Mathematics",
        name: "bsc",
      },
      {
        id: 5,
        maniTitle: "Bachelor of Science(B.Sc)",
        title: "Micro Biology",
        name: "bsc",
      },
    ],
  },
  {
    id: 3,
    title: "Arts",
    img: "arts.jpg",

    subCourse: [
      {
        id: 1,
        maniTitle: "Bachelor of Arts(B.A.)",
        title: "Bachelor of Arts(B.A.)",
        name: "ba",
      },
      {
        id: 2,
        maniTitle: "Bachelor of Arts(B.A.)",
        title: "English",
        name: "ba",
      },
      {
        id: 3,
        maniTitle: "Bachelor of Arts(B.A.)",
        title: "History",
        name: "ba",
      },
      {
        id: 4,
        maniTitle: "Bachelor of Arts(B.A.)",
        title: "Gujarati",
        name: "ba",
      },
      {
        id: 5,
        maniTitle: "Bachelor of Arts(B.A.)",
        title: "Economics",
        name: "ba",
      },
      {
        id: 6,
        maniTitle: "Bachelor of Arts(B.A.)",
        title: "Hindi",
        name: "ba",
      },
    ],
  },
  {
    id: 4,
    title: "Commerce",
    img: "commerce.jpg",

    subCourse: [
      {
        id: 1,
        maniTitle: "Bachelor of Commerce(B.COM)",
        title: "Bachelor of Commerce(B.COM)",
        name: "bcom",
      },
      {
        id: 2,
        maniTitle: "Master of Commerce(M.COM)",
        title: "Master of Commerce(M.COM)",
        name: "mcom",
      },
    ],
  },
  {
    id: 5,
    title: "Management",
    img: "management.jpg",

    subCourse: [
      {
        id: 1,
        maniTitle: "Bachelor of Business Administration(B.B.A.)",
        title: "Bachelor of Business Administration(B.B.A.)",
        name: "bba",
      },
    ],
  },
];

export const CourseDetailData = [
  {
    id: 1,
    maniTitle: "B.C.A.",
    title: "BCA - Bachelor of Computer Applications.",
    img: "cs.jpg",
    name: "bca",
    subjects: {
      subjects: [],
      semester: [
        {
          id: 1,
          title: "Semester-1",
          subjects: [
            "Programming In C",
            "Computer Fundamental",
            "Technical Communication Skill",
            "Networking",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 2,
          title: "Semester-2",
          subjects: [
            "Data Structure Using C",
            "Web Development Using PHP",
            "Computer Organization & Architecture",
            "Mathematics",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 3,
          title: "Semester-3",
          subjects: [
            "Object Oriented Programming With C++",
            "WordPress",
            "Oracle",
            "System Analysis & Design",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 4,
          title: "Semester-4",
          subjects: [
            "Core Java",
            "Programming With C#",
            "Advanced Networking",
            "OS & Linux",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 5,
          title: "Semester-5",
          subjects: [
            "Advance Java",
            "Search Engine Optimization",
            "ASP.net",
            "Project",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 6,
          title: "Semester-6",
          subjects: [
            "Android",
            "MS SQL Server 2012 & Data Warehouse & Data Mining",
            "WordPress",
            "Project",
            "Practical - 1",
            "Practical - 2",
          ],
        },
      ],
    },

    description: `it is a three-year undergraduate course that can be pursued by the student who is aspiring their minds in IT field. The duration of the course is 3 years and divided into 6 semesters. It comprises of the subjects like database, networking, data structure, core programming languages like C and java. This course provides a lot of opportunities to the students who are interested in computer field and wants to work in the IT sector as programmer or software developer. To get complete knowledge about the course and career scope, you can go through this article.`,
    eligibility:
      "Bachelor of Computer Science requires a candidate to have passed HSC (10+2) exam from any stream as passing subject with minimum 45% marks at 12th standard.",
    futureScope: [
      "Web Designer",
      "Web Developer",
      "SEO",
      "Software Developer",
      "Mobile Application Developer",
      "DBA",
      "System Tester",
      "Network Administrator",
    ],
    afterThisCourse: `The BCA is an undergraduate degree course in computer applications for duration of 3 years. After completing BCA, a student can go for M.Sc(IT&CA)/MCA which is a master course in computer application and is considered equivalent to engineering course B.Tech.

    Apart from these options candidates are informed that after completing their BA course they become eligible to appear for government exams.`,
    courseDuration:
      "This Program is extend to six semester each with duration six months.",
  },
  {
    id: 2,
    maniTitle: "B.SC.(IT)",
    title: "B.Sc IT - Bachelor of Science in Information Technology.",
    img: "cs.jpg",
    name: "bcsit",
    subjects: {
      // subjects: ["English", "History", "Gujarati", "Economics", "Hindi"],
      subjects: [],
      semester: [
        {
          id: 1,
          title: "Semester-1",
          subjects: [
            "Programming In C",
            "Computer Fundamental",
            "Technical Communication Skill",
            "Networking",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 2,
          title: "Semester-2",
          subjects: [
            "Data Structure Using C",
            "Web Development Using PHP",
            "Computer Organization & Architecture",
            "Mathematics",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 3,
          title: "Semester-3",
          subjects: [
            "Object Oriented Programming With C++",
            "Joomla",
            "Oracle",
            "System Analysis & Design",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 4,
          title: "Semester-4",
          subjects: [
            "Core Java",
            "Programming With C#",
            "Advanced Networking",
            "OS & Linux",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 5,
          title: "Semester-5",
          subjects: [
            "Advance Java",
            "Search Engine Optimization",
            "ASP.net",
            "Project",
            "Practical - 1",
            "Practical - 2",
          ],
        },
        {
          id: 6,
          title: "Semester-6",
          subjects: [
            "Android",
            "MS SQL Server 2012 & Data Warehouse & Data Mining",
            "IOT",
            "Project",
            "Practical - 1",
            "Practical - 2",
          ],
        },
      ],
    },

    description: `It is a Bachelor's degree awarded for an undergraduate course or program in the Information technology field. The degree is normally required in order to work in the Information technology industry.The duration of the course is 3 years and divided into 6 semesters. It comprises of the subjects like database, networking, data structure, core programming languages like C and java. This course provides a lot of opportunities to the students who are interested in computer field and wants to work in the IT sector as programmer or software developer. To get complete knowledge about the course and career scope, you can go through this article.`,
    eligibility:
      "Bachelor of Science in Information Technology requires a candidate to have passed HSC (10+2) exam in any stream with mathematics/business maths/ statics/ physics/ computer as a passing subject with minimum 45% marks at 12th standard ",
    futureScope: [
      "Web Designer",
      "Web Developer",
      "SEO",
      "Software Developer",
      "Mobile Application Developer",
      "DBA",
      "System Tester",
      "Network Administrator",
    ],
    afterThisCourse: `The BScIT is an undergraduate degree course in computer applications for duration of 3 years. After completing BScIT, a student can go for M.Sc(IT&CA)/MCA which is a master course in computer application and is considered equivalent to engineering course B.Tech. Apart from these options candidates are informed that after completing their BA course they become eligible to appear for government exams.`,
    courseDuration:
      "This Program is extend to six semester each with duration six months.",
  },
];
