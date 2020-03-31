const $ = window.jQuery;

let scroll_out = (scroll_out_list, window_height, scroll_top) => {
    scroll_out_list.forEach((element, index) => {
        if (window_height + scroll_top > element.top + element.height + 200) {
            element.dom.addClass("animated fadeOutDown");
        } else if (window_height + scroll_top < element.top + element.height + 200) {
            element.dom.removeClass("animated fadeOutDown").addClass("animated fadeInUp");
        }
    });
};

let scroll_in = (scroll_in_list, window_height, scroll_top) => {
    scroll_in_list.forEach((element, index) => {
        if (window_height + scroll_top > element.top + element.height * 0.9) {
            element.dom.addClass("animated fadeInUp");
        } else {
            element.dom.css({opacity: 0}).removeClass("animated fadeInUp");
        }
    });
};

let scrollAnimate = () => {
    let element = {};
    let scroll_top = 0;
    let window_height = $(window).height();
    $(window).resize(function () {
        window_height = $(window).height();
    });

    let scroll_in_list = [];
    $('.scrollIn').each((index, value) => {
        element = {dom: $(value), top: $(value).offset().top, height: $(value).height()};
        scroll_in_list.push(element);
    });

    let scroll_out_list = [];
    $('.scrollOut').each((index, value) => {
        element = {dom: $(value), top: $(value).offset().top, height: $(value).height()};
        scroll_out_list.push(element);
    });

    scroll_in(scroll_in_list, window_height, scroll_top);
    scroll_out(scroll_out_list, window_height, scroll_top);

    $(window).scroll(function () {
        scroll_top = $(document).scrollTop();
        scroll_in(scroll_in_list, window_height, scroll_top);
        scroll_out(scroll_out_list, window_height, scroll_top);
    });

};

export default scrollAnimate;
