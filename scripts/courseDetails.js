const courseDetails = {
  "ITC 3304": [
    {
      lectureId: 1,
      lectureLink: "materials/php/lec1.pdf",
      lectureTitle: "Introduction to php",
    },
    {
      lectureId: 2,
      lectureLink: "materials/php/lec2.pdf",
      lectureTitle: "Control Structures",
    },
    {
      lectureId: 3,
      lectureLink: "materials/php/lec3.pdf",
      lectureTitle: "Function and Arrays",
    },
    {
      lectureId: 4,
      lectureLink: "materials/php/lec4.pdf",
      lectureTitle: "Handling HTML forms with PHP",
    },
    {
      lectureId: 5,
      lectureLink: "materials/php/lec5.pdf",
      lectureTitle: "PHP and MySQL",
    },
    {
      lectureId: 6,
      lectureLink: "materials/php/lec6.pdf",
      lectureTitle: "Clasess and Objects",
    },
    {
      lectureId: 7,
      lectureLink: "materials/php/lec7.pdf",
      lectureTitle: "File handling in PHP",
    },
    /* {
      lectureId: ,
      lectureLink: "materials/",
      lectureTitle: "",
    }, */
  ],
};

export function course() {
  let courseId = localStorage.getItem("courseCode");
  let lectures = courseDetails[courseId];
  return lectures;
}
