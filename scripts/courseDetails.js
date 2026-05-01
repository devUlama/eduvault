import { course } from "./data/courseDetails.js";

console.log(course());

let lectures = course();
if (lectures) {
  for (let lecture of lectures) {
    console.log(lecture);
    addLectures(lecture);
  }
}

courseDetailHeading();
handleClickLecture();

function addLectures(lecture) {
  let lecturesContainer = document.querySelector("#lecturesCards");
  lecturesContainer.append(createLectureItem(lecture));
}

function createLectureItem(lecture) {
  let lectureCard = document.createElement("li");
  lectureCard.append(createLectureCard(lecture));
  return lectureCard;
}

function createLectureCard(lecture) {
  let card = document.createElement("button");
  card.setAttribute("data-lecture-link", lecture.lectureLink);
  card.id = "lectureButton";
  card.classList.add("card", "lecture-card");
  card.append(createLectureLogo(), createLectureDetails(lecture));
  return card;
}

function createLectureDetails(lecture) {
  let lectureDetails = document.createElement("div");
  lectureDetails.append(
    createLectureNumber(lecture),
    createLectureDescription(lecture),
  );
  return lectureDetails;
}

function createLectureLogo() {
  let docsIcon = document.createElement("img");
  docsIcon.src = "assets/icons/docs.svg";
  docsIcon.alt = "document";
  return docsIcon;
}

function createLectureNumber(lecture) {
  let lecturesNumber = document.createElement("h4");
  lecturesNumber.textContent = "Lecture " + lecture.lectureId;
  return lecturesNumber;
}

function createLectureDescription(lecture) {
  let lecturesDescription = document.createElement("p");
  lecturesDescription.textContent = lecture.lectureTitle;
  return lecturesDescription;
}

function courseDetailHeading() {
  let CourseHeading = document.querySelector("#courseHeading");

  let courseCode = localStorage.getItem("courseCode");
  let courseTitle = localStorage.getItem("courseTitle");
  CourseHeading.textContent = "";
  CourseHeading.append(
    courseCode,
    " ",
    document.createElement("br"),
    " ",
    courseTitle,
  );
}
function handleClickLecture() {
  let lecturesContainer = document.querySelector("#lecturesCards");
  lecturesContainer.addEventListener("click", function (event) {
    let lecture = event.target.closest(".lecture-card");

    if (!lecture) {
      return;
    }
    localStorage.setItem("lectureLink", lecture.dataset.lectureLink);
    window.location.href = "viewCourse.html";
    event.stopPropagation();
  });
}
