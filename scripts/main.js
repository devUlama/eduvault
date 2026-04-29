function setDepartment() {
  let departments = document.querySelectorAll(".department");
  for (let department of departments) {
    department.addEventListener("click", function (event) {
      event.stopPropagation;
      let departmentBelongTo = department.dataset.department;
      localStorage.setItem("department", departmentBelongTo);
    });
  }
}

function setLevel() {
  let levels = document.querySelectorAll(".level");
  for (let level of levels) {
    level.addEventListener("click", function (event) {
      event.stopPropagation();
      let levelBelongTo = level.dataset.level;
      localStorage.setItem("level", levelBelongTo);
    });
  }
}
