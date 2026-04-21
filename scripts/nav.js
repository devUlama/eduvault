let toggle_nav = document.querySelector("#toggle-nav");
let nav = document.querySelector("#nav");
toggle_nav.addEventListener("click", function () {
  nav.classList.toggle("visible");
});

/* function getDepartment() {
  let departments = document.querySelectorAll(".department");
  for (let department of departments) {
    department.addEventListener("click", function () {
      console.log(department.id);
    });
  } 
} */
