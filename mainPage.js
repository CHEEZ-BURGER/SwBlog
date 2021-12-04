function btn_1() {
  let up_1 = document.querySelector(".up_bar");
  let down_1 = document.querySelector(".down_bar");
  let header = document.querySelector(".header");
  let scerchIcon = document.querySelector(".scerch_btn");
  let header_hidden = document.querySelector(".header_hidden");

  up_1.classList.toggle("active");
  down_1.classList.toggle("active");
  header.classList.toggle("active");
  header_hidden.classList.toggle("active");
  scerchIcon.classList.toggle("up");
}
function btn_2() {
  let scerchIcon = document.querySelector(".scerch_btn");

  scerchIcon.classList.toggle("active");
}