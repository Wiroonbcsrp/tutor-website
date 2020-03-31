// let scrollIn = function () {
//
// };
//
// let scrollOut = function () {
//
// };
//
// jQuery(document).ready(function ($) {
//     let window_height = $(window).height();
//     $(window).resize(function(){
//         window_height = $(window).height();
//     });
//
//     let element = $('.scrollIn');
//     let element_offset = element.offset().top;
//
//     let scroll_top = 0;
//     $(window).scroll(function(){
//         scroll_top = $(document).scrollTop();
//         if (window_height + scroll_top > element_offset + element.height()) {
//             element.removeClass("d-none").addClass('animated');
//         } else {
//             element.removeClass('animated').addClass('d-none');
//         }
//     });
//     // console.log($('.scrollIn').offset().top);
//     scrollIn();
//     scrollOut();
// });
