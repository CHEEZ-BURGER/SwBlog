function dark(){
var sections = document.querySelectorAll(".nfixed_back,-webkit-scrollbar-track,.moon,.sun_blue,.sun_black, .cat_btn_box a, .back_btn a, .content_box_blur, .main_inner, .hello_p, .bold, .high, .more_box_p, .main_inner h1, .arrow_right, body, h1, h2, .recent_text h3, .logo, .scerch_btn, .main_inner h2, .header_logo, .main_inner h2, .main_inner p, .main_inner li, p, .main_inner ul, .main_cont_back, .footer, .back_btn img, .line, .hello_content_box p, .header"); 
for( var i = 0; i < sections.length; i++ ){
    var item = sections.item(i); 
    item.classList.remove("dark");
    }
}
function light(){
    var sections = document.querySelectorAll(".nfixed_back,-webkit-scrollbar-track,.moon,.sun_blue,.sun_black, .cat_btn_box a, .back_btn a, .content_box_blur, .main_inner, .hello_p, .bold, .high, .more_box_p, .main_inner h1, .arrow_right, body, h1, h2, .recent_text h3, .logo, .scerch_btn, .main_inner h2, .header_logo, .main_inner h2, .main_inner p, .main_inner li, p, .main_inner ul, .main_cont_back, .footer, .back_btn img, .line, .hello_content_box p, .header"); 
    for( var i = 0; i < sections.length; i++ ){
        var item = sections.item(i); 
        item.classList.add("dark");
        }
    }
    function toggle(){
        var sections = document.querySelectorAll(".nfixed_back,-webkit-scrollbar-track,.moon,.sun_blue,.sun_black, .cat_btn_box a, .back_btn a, .content_box_blur, .main_inner, .hello_p, .bold, .high, .more_box_p, .main_inner h1, .arrow_right, body, h1, h2, .recent_text h3, .logo, .scerch_btn, .main_inner h2, .header_logo, .main_inner h2, .main_inner p, .main_inner li, p, .main_inner ul, .main_cont_back, .footer, .back_btn img, .line, .hello_content_box p, .header"); 
        for( var i = 0; i < sections.length; i++ ){
            var item = sections.item(i); 
            item.classList.toggle("dark");
            }
        }