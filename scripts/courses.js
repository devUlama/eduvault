const courses = {
  "Computer Science": {
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
