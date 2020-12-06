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
        rootMargin: "-30px",
        threshold: 0
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    const observer_target = document.querySelectorAll('.right-sections');

    observer_target.forEach(e=>{
        observer.observe(e);
    });


    const click_target = document.querySelectorAll('.ank');
    click_target.forEach(click_target=>{

        click_target.addEventListener('click',function(e){
            const scroll_target = document.querySelectorAll('.right-title');
            let target_attribute = '';
            scroll_target.forEach(element=>{
                target_attribute = element.getAttribute('category');
                if(target_attribute === e.target.getAttribute('category')){
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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