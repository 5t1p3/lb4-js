const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

openBtn.addEventListener("click", function () {
  // if (overlay.classList.contains("open-modal")) {
  //   overlay.classList.remove("open-modal");
  // } else {
  //   overlay.classList.add("open-modal");
  // }
  overlay.classList.toggle("open-modal");
});
closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open-modal");
});
