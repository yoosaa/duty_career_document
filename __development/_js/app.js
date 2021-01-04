/**
 * import
 */
require('intersection-observer');
require('smoothscroll-polyfill');
let $ = require('jquery');


/**
 * 読み込み後
 */
window.addEventListener('load', function() {

    // intersect area
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.20
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    const observer_target = document.querySelectorAll('.right-sections');

    observer_target.forEach(e => {
        observer.observe(e);
    });


    const click_target = $('.ank');
    console.log(click_target);
    let scroll_target = '';
    let scroll_distance = 0;
    click_target.each(function() {

        console.log($(this));
        $(this).on('click', function(e) {
            const windowW = window.innerWidth;
            const scroll_buffer = windowW > 599 ? 40 : 200;
            const scroll_target = $('.right-title');
            // 調整用
            const adjust = 0;
            let target_attribute = '';
            scroll_target.each(function() {
                target_attribute = $(this).attr('category');
                if (target_attribute === e.target.getAttribute('category')) {
                    scroll_distance = ($(this).offset().top + adjust) - scroll_buffer;
                    $('body,html').animate({ scrollTop: scroll_distance }, 300, 'swing');
                }
            });
        });

    });

});


/**
 *
 * @param {*} intersectfunction
 */
const doWhenIntersect = target => {

    target.forEach(entry => {

        if (entry.isIntersecting) {
            const currentActive = document.querySelectorAll('.anks .current');
            if (currentActive !== null) {
                currentActive[0].classList.remove('current');
            }

            const currentAttribute = entry.target.getAttribute('category');
            const isActive = document.querySelector('li[category="' + currentAttribute + '"]');
            isActive.classList.add('current');

        }
    });

}