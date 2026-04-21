function setDepartment() {
  let departments = document.querySelectorAll(".department");
  for (let department of departments) {
    department.addEventListener("click", function (event) {
      event.stopPropagation;
      let departmentBelongTo = department.dataset.department;
      sessionStorage.setItem("department", departmentBelongTo);
    });
  }
}

function setLevel() {
  let levels = document.querySelectorAll(".level");
  for (let level of levels) {
    level.addEventListener("click", function (event) {
      event.stopPropagation();
      let levelBelongTo = level.dataset.level;
      sessionStorage.setItem("level", levelBelongTo);
    });
  }
}

function getCourses() {
  let department = sessionStorage.getItem("department");
  let level = sessionStorage.getItem("level");
  console.log(department);
  console.log(level);
  let courseList = courses[department][level];
  return courseList;
  /* for (let course of courseList) {
    console.log(course.courseCode, course.courseTitle);
  } */
}

/* function makeCourses() {}
 */

function addCourse() {
  let courseSection = document.querySelector("#course-card");
  courseSection.append(makeCourseItem());
}

function makeCourseItem() {
  let card = makeCourses();
  let cardList = document.createElement("li");
  cardList.append(card);
  return cardList;
}

function makeCourses() {
  let courseCard = document.createElement("a");
  courseCard.href = "courseDetails.html";
  courseCard.classList.add("main-section-card", "course-card", "block-link");
  addCourseDetials(courseCard);
  return courseCard;
}

function addCourseDetials(courseCard) {
  let courseCode = createCourseCode();
  let courseTitle = createCourseTitle();
  let courseDescription = createCourseDescription();
  courseCard.append(courseCode, courseTitle, courseDescription);
}

function createCourseCode() {
  let courseCode2 = document.createElement("span");
  courseCode2.classList.add("button", "course-card__code");
  /* to be check */
  courseCode2.textContent = course.courseCode;
  return courseCode2;
}

function createCourseTitle() {
  let courseTitle2 = document.createElement("h3");
  /* to be check */
  courseTitle2.textContent = course.courseTitle;
  return courseTitle2;
}

function createCourseDescription() {
  let courseDescription = document.createElement("p");
  courseDescription.textContent =
    "Learn the basic and fundamentals of computer science";
  return courseDescription;
}
