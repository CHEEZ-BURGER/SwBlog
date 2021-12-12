function btn_1() {
  let up_1 = document.querySelector(".up_bar");
  let down_1 = document.querySelector(".down_bar");
  let header = document.querySelector(".header");
  let scerchIcon = document.querySelector(".scerch_btn");
  let header_hidden = document.querySelector(".header_hidden");
  let hello_scene = document.querySelector(".hello_scene");

  up_1.classList.toggle("active");
  down_1.classList.toggle("active");
  header.classList.toggle("active");
  header_hidden.classList.toggle("active");
  hello_scene.classList.toggle("active");
  scerchIcon.classList.toggle("up");
}
function btn_2() {
  let scerchIcon = document.querySelector(".scerch_btn");
  let hello_scene = document.querySelector(".hello_scene");

  scerchIcon.classList.toggle("active");
  hello_scene.classList.toggle("left");
}