/**
 * import
 */
require('intersection-observer');
require('smoothscroll-polyfill');


/**
 * 読み込み後
 */
window.addEventListener('load',function(){

    // intersect area
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.20
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    const observer_target = document.querySelectorAll('.right-sections');

    observer_target.forEach(e=>{
        observer.observe(e);
    });


    const click_target = document.querySelectorAll('.ank');
    let scroll_target = '';
    let scroll_distance = 0;
    click_target.forEach(click_target=>{
        
        click_target.addEventListener('click',e=>{
            const windowW = window.innerWidth;
            const scroll_buffer = windowW > 599 ? 40 : 200;
            const scroll_target = document.querySelectorAll('.right-title');
            let target_attribute = '';
            scroll_target.forEach(element=>{
                target_attribute = element.getAttribute('category');
                if(target_attribute === e.target.getAttribute('category')){
                    scroll_distance = window.pageYOffset + element.getBoundingClientRect().top - scroll_buffer;
                    window.scrollTo({
                        top: scroll_distance,
                        behavior: "smooth"
                    });
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

    target.forEach(entry=>{

        if(entry.isIntersecting){
            const currentActive = document.querySelectorAll('.anks .current');
            if(currentActive !== null){
                currentActive[0].classList.remove('current');
            }

            const currentAttribute = entry.target.getAttribute('category');
            const isActive = document.querySelector('li[category="' + currentAttribute + '"]');
            isActive.classList.add('current');

        }
    });

}