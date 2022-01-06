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
function dark() {
  var sections = document.querySelectorAll(".des, html, .content_box_blur, .dark_call, .hello_p, .year, .more_btn, .more_box_p, .main_line, .arrow_right, body, h1, h2, .recent_text h3, .logo, .scerch_btn, .harmony, .recent_scene, .moon, .sun_blue, .sun_black, p, .hello_scene, .main_cont_back, .footer, .up_bar, .line, .hello_content_box p, .header"); 
  for( var i = 0; i < sections.length; i++ ){
    var item = sections.item(i); 
    item.classList.toggle("dark");
  }
}


function isSameAsLocation(uriString) {
  const uri = new URL(uriString);

  return (
      uri.origin === window.location.origin &&
      uri.pathname === window.location.pathname
  );
}


