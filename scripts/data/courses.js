const courses = {
  "Computer Science": {
    100: [
      {
        courseCode: "COS 101",
        courseTitle: "Introduction to Computing Science",
        courseDescription:
          "Introduce the fundamental concepts, history, and application oof computer science",
        semester: "1",
      },
      {
        courseCode: "COS 102",
        courseTitle: "Problem Solving",
        courseDescription:
          "Develops logical and analytical techniques for solving computational and real-world problem",
        semester: "1",
      },
      {
        courseCode: "STA 111",
        courseTitle: "Descriptive Statistics",
        courseDescription:
          "Covers methods of collecting, organizing, analyzing, and presenting statistical data",
        semester: "1",
      },
      {
        courseCode: "MTH 101",
        courseTitle: "Elementary Mathematics I",
        courseDescription:
          "Focuses on foundational topics in Set, algebra and  trigonometry",
        semester: "1",
      },
      {
        courseCode: "PHY 101",
        courseTitle: "General Physics I",
        courseDescription:
          "Explain the basic principles of mechanics, motion, force, and energy",
        semester: "1",
      },
      {
        courseCode: "PHY 102",
        courseTitle: "General Physics II",
        courseDescription:
          "Examines the principles of electricity and magnetism",
        semester: "1",
      },
      {
        courseCode: "GST 111",
        courseTitle: "Communication in English",
        courseDescription:
          "Develops effective communication skills in English through writing, and speaking",
        semester: "1",
      },
      {
        courseCode: "PHY 107",
        courseTitle: "Practical Physics I",
        courseDescription:
          "Provides practical experience in basic physics experiments and measurements",
        semester: "1",
      },
      {
        courseCode: "BUK-ICT 102",
        courseTitle: "Introduction to Information & Communication Technology",
        courseDescription:
          "Introduces the fundamentals of information and communication technology and its application",
        semester: "2",
      },
      {
        courseCode: "BUK-COS 104",
        courseTitle: "Introduction to Application Packages",
        courseDescription:
          "Covers the use of common computer application software for productivity and data management",
        semester: "2",
      },
      {
        courseCode: "BUK-COS 104",
        courseTitle: "Introduction to Computer Programming",
        courseDescription:
          "Introduce the fundamental programmming concepts using python programming Language",
        semester: "2",
      },
      {
        courseCode: "MTH 102",
        courseTitle: "Elementary Mathematics II",
        courseDescription:
          "Learn topics in calculus which include functions, differentiation and integration",
        semester: "2",
      },
      {
        courseCode: "GST 112",
        courseTitle: "Nigerian Peoples and Culture",
        courseDescription:
          "Examines the cultural heritage, traditions, and social values of Nigerian peoples",
        semester: "2",
      },
      {
        courseCode: "PHY 108",
        courseTitle: "Practical Physics II",
        courseDescription:
          "Provides laboratory practices in electricity and magnetism",
        semester: "2",
      },
    ],
    200: [
      { courseCode: "ENT 211", courseTitle: "Enterprenuership and Innovation" },
      { courseCode: "MTH 201", courseTitle: "Mathematical Methods I" },
      { courseCode: "COS 201", courseTitle: "Computer Programming I" },
      { courseCode: "IFT 211", courseTitle: "Digital Logic Design" },
      { courseCode: "CSC 203", courseTitle: "Discrete Structure" },
      {
        courseCode: "SEN 201",
        courseTitle: "Introduction to Software Engineering",
      },
      {
        courseCode: "BUK-IFT 203",
        courseTitle: "Introduction to Web Technologies",
      },
    ],
    300: [
      { courseCode: "SWE 3311", courseTitle: "Object-Oriented Programming" },
      { courseCode: "CSC 3309", courseTitle: "Operating System II" },
      { courseCode: "ITC 3304", courseTitle: "Web Application Development" },
      { courseCode: "ITC 3305", courseTitle: "Database Management Systems" },
      {
        courseCode: "ITC 3303",
        courseTitle: "Data communication and Networking",
      },
      { courseCode: "CSC 3251", courseTitle: "Research Methods" },
      {
        courseCode: "CSC 3307",
        courseTitle: "Computational Science and Numerical Methods",
      },
      { courseCode: "CSC 3201", courseTitle: "Compiler Construction I" },
      {
        courseCode: "CSC 3305",
        courseTitle: "Organisation of programming Languages",
      },
    ],
    400: [
      { courseCode: "ITC 4204", courseTitle: "Mobile Application Development" },
      { courseCode: "SWE 4203", courseTitle: "Project Management" },
      {
        courseCode: "CSC 4307",
        courseTitle: "Special Topics in Computer Science",
      },
      { courseCode: "SWE 4205", courseTitle: "Structured Programming" },
      {
        courseCode: "SWE 4209",
        courseTitle: "Concept of Programming Languages",
      },
      { courseCode: "CSC 4331", courseTitle: "Artificial Intelligence" },
      {
        courseCode: "EEP 3201",
        courseTitle: "Enterprenuership and innovation",
      },
      { courseCode: "CSC 4303", courseTitle: "Operational Research" },
      {
        courseCode: "CSC 4305",
        courseTitle: "Introduction to Parallel Programming",
      },
    ],
  },
  "Software Engineering": {
    100: [
      {
        courseCode: "COS 101",
        courseTitle: "Introduction to Computing Science",
      },
      { courseCode: "COS 102", courseTitle: "Problem Solving" },
      { courseCode: "STA 111", courseTitle: "Descriptive Statistics" },
      { courseCode: "MTH 101", courseTitle: "Elementary Mathematics I" },
      { courseCode: "PHY 101", courseTitle: "General Physics I" },
      { courseCode: "GST 111", courseTitle: "Communication in English" },
      { courseCode: "PHY 107", courseTitle: "Practical Physics I" },
    ],
    200: [
      { courseCode: "ENT 211", courseTitle: "Enterprenuership and Innovation" },
      { courseCode: "MTH 201", courseTitle: "Mathematical Methods I" },
      { courseCode: "COS 201", courseTitle: "Computer Programming I" },
      { courseCode: "IFT 211", courseTitle: "Digital Logic Design" },
      { courseCode: "CSC 203", courseTitle: "Discrete Structure" },
      {
        courseCode: "SEN 201",
        courseTitle: "Introduction to Software Engineering",
      },
      {
        courseCode: "BUK-IFT 203",
        courseTitle: "Introduction to Web Technologies",
      },
      /* { courseCode: "", courseTitle: "" }, */
    ],
    300: [
      { courseCode: "ITC 3305", courseTitle: "Database Management Systems" },
      {
        courseCode: "ITC 3303",
        courseTitle: "Data communication and Networking",
      },
      { courseCode: "CSC 3251", courseTitle: "Research Methods" },
      {
        courseCode: "CSC 3307",
        courseTitle: "Computational Science and Numerical Methods",
      },
      { courseCode: "ITC 3304", courseTitle: "Web Application Development" },
      { courseCode: "SWE 3311", courseTitle: "Object-Oriented Programming" },
    ],
    400: [
      {
        courseCode: "EEP 3201",
        courseTitle: "Enterprenuership and innovation",
      },
      { courseCode: "CSC 4303", courseTitle: "Operational Research" },
      { courseCode: "CSC 4331", courseTitle: "Artificial Intelligence" },
      {
        courseCode: "SWE 4201",
        courseTitle: "Software Configuration Management and Maintenance",
      },
      { courseCode: "SWE 4203", courseTitle: "Project Management" },
      {
        courseCode: "SEW 4207",
        courseTitle: "Software Engineering Professional Practice",
      },

      {
        courseCode: "SWE 4210",
        courseTitle: "Software Architecture and Design",
      },
      {
        courseCode: "SWE 4209",
        courseTitle: "Concept of Programming Languages",
      },
    ],
  },
  "Cyber Security": {
    100: [
      {
        courseCode: "COS 101",
        courseTitle: "Introduction to Computing Science",
      },
      { courseCode: "COS 102", courseTitle: "Problem Solving" },
      { courseCode: "STA 111", courseTitle: "Descriptive Statistics" },
      { courseCode: "MTH 101", courseTitle: "Elementary Mathematics I" },
      { courseCode: "PHY 101", courseTitle: "General Physics I" },
      { courseCode: "GST 111", courseTitle: "Communication in English" },
      { courseCode: "PHY 107", courseTitle: "Practical Physics I" },
    ],
    200: [
      {
        courseCode: "CYB 201",
        courseTitle: "Introduction to Cyber Security and Strategy",
      },
      {
        courseCode: "SEN 201",
        courseTitle: "Introduction to Software Engineering",
      },
      { courseCode: "ENT 211", courseTitle: "Enterprenuership and Innovation" },
      { courseCode: "COS 201", courseTitle: "Computer Programming I" },
      { courseCode: "IFT 203", courseTitle: "Introduction to Web Technology" },
      {
        courseCode: "CYB 203",
        courseTitle: "Cybersecurity Law and Countermeasures",
      },
      { courseCode: "CSC 203", courseTitle: "Discerete Structures" },
      { courseCode: "MTH 201", courseTitle: "Mathematical Method I" },
    ],
    300: [
      { courseCode: "ITC 3305", courseTitle: "Database Management Systems" },
      {
        courseCode: "ITC 3303",
        courseTitle: "Data communication and Networking",
      },
      { courseCode: "CSC 3251", courseTitle: "Research Methods" },
    ],
    400: [],
  },
  "Information Technology": {
    100: [
      {
        courseCode: "COS 101",
        courseTitle: "Introduction to Computing Science",
      },
      { courseCode: "COS 102", courseTitle: "Problem Solving" },
      { courseCode: "STA 111", courseTitle: "Descriptive Statistics" },
      { courseCode: "MTH 101", courseTitle: "Elementary Mathematics I" },
      { courseCode: "PHY 101", courseTitle: "General Physics I" },
      { courseCode: "GST 111", courseTitle: "Communication in English" },
      { courseCode: "PHY 107", courseTitle: "Practical Physics I" },
    ],
    200: [
      {
        courseCode: "SEN 201",
        courseTitle: "Introduction to Software Engineering",
      },
      { courseCode: "ENT 211", courseTitle: "Enterprenuership and Innovation" },
      { courseCode: "COS 201", courseTitle: "Computer Programming I" },
      { courseCode: "IFT 203", courseTitle: "Introduction to Web Technology" },
      { courseCode: "CSC 203", courseTitle: "Discerete Structures" },
    ],
    300: [
      { courseCode: "ITC 3201", courseTitle: "Data Analysis" },
      { courseCode: "ITC 3202", courseTitle: "Enterprise Architecture" },
      {
        courseCode: "SWE 3202",
        courseTitle: "System Testing, Integration and Quality Assuarance",
      },
      { courseCode: "ITC 3305", courseTitle: "Database Management Systems" },
      {
        courseCode: "ITC 3303",
        courseTitle: "Data communication and Networking",
      },
      { courseCode: "CSC 3251", courseTitle: "Research Methods" },
      { courseCode: "ITC 3304", courseTitle: "Web Application Development" },
      { courseCode: "ITC 3321", courseTitle: "Web Server Administartion" },
      { courseCode: "ITC 3331", courseTitle: "Database Programming" },
      {
        courseCode: "ITC 3341",
        courseTitle: "Network Servers and Infrastructures",
      },
    ],
    400: [],
  },
};

/* RETURN LIST OF COURSES FOR A SPECIFIC DEPARTMENT AND LEVEL
 */
export function getCourses() {
  let department = localStorage.getItem("department");
  let level = localStorage.getItem("level");
  console.log(department);
  console.log(level);
  let courseList = courses[department][level];
  return courseList;
}
