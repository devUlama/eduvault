import { getCourses } from "./courses.js";

/* ADD A COURSE TO A PAGE AFTER CREATING IT FULLY,
IT DEPENDS ON makeCourseItem function  TO CRAETE A FULL COURSE NODE */
function addCourse(course) {
  let courseSection = document.querySelector("#course-card");
  courseSection.append(makeCourseItem(course));
}

/* CREATE THE FIRST PARENT LAYER OF A COURSE AND ADD ALL ITS CHILD
IT USES THE makeCourse  */
function makeCourseItem(course) {
  let card = makeCourse(course);
  let cardList = document.createElement("li");
  cardList.append(card);
  return cardList;
}

/* CREATE A COURES CARD NODE AND ADD ALL ITS INFORMATION AS CHILD NODE
IT WORKS  WITH THE HELP OF THE addCourseDetials function */
function makeCourse(course) {
  let courseCard = document.createElement("a");
  courseCard.href = "courseDetails.html";
  courseCard.classList.add("card", "course-card", "block-a");
  addCourseDetials(courseCard, course);
  return courseCard;
}

/*ACCEPT A PARENT NODE AS AN ARGUMENT AND ADD COURSE INFORMATION AS CHILD OF THE PARENT*/
function addCourseDetials(courseCard, course) {
  let courseCode = createCourseCode(course);
  let courseTitle = createCourseTitle(course);
  let courseDescription = createCourseDescription(course);
  courseCard.append(courseCode, courseTitle, courseDescription);
}

/* CREATE COURSE CODE NODE */
function createCourseCode(course) {
  let courseCode = document.createElement("span");
  courseCode.classList.add("button", "course-card__code");
  /* to be check */
  courseCode.textContent = course.courseCode;
  return courseCode;
}

/* CREATE COURSE TITLE NODE */
function createCourseTitle(course) {
  let courseTitle = document.createElement("h3");
  courseTitle.textContent = course.courseTitle;
  return courseTitle;
}

/* CREATE COURSE DESCRIPTION NODE */
function createCourseDescription(course) {
  let courseDescription = document.createElement("p");
  courseDescription.textContent =
    "Learn the basic and fundamentals of computer science";
  return courseDescription;
}

/* SET THE HEADING NODE OF THE PAGE */
function setHeading() {
  let level = localStorage.getItem("level");
  let department = localStorage.getItem("department");

  let header = document.querySelector("#coursesPage");

  header.firstElementChild.textContent = localStorage.getItem("department");
  header.lastElementChild.textContent =
    "Browse Level " +
    level +
    " " +
    department +
    " Course materials and access learning resources";
}

/* HANDLE WHEN A COURSE CARD HAS BEEN CLICKED */
function handleClickCourse() {
  let courseCard = document.querySelector("#course-card");
  courseCard.addEventListener("click", function (event) {
    let courseItem = event.target.closest(".course-card");

    if (!courseItem) {
      return;
    }
    let courseCode = courseItem.querySelector("span").textContent;
    let courseTitle = courseItem.querySelector("h3").textContent;
    localStorage.setItem("courseTitle", courseTitle);
    localStorage.setItem("courseCode", courseCode);
    event.stopPropagation();
  });
}

setHeading();

for (let course of getCourses()) {
  addCourse(course);
}

handleClickCourse();
