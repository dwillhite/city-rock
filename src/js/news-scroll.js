/* NEWS-SCROLL*/
let home = document.getElementById('site');

if (home) {
    const scrollOvers = document.querySelectorAll(".overlay")
    const scrollTexts = document.querySelectorAll(".overText")
    
    /* DEBOUNCE */
    function debounce(func, wait= 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context. args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    
    
    
    /**CHANGE ON SCROLL **/
    window.addEventListener('scroll', debounce(checkSlide));
    
    function checkSlide(e) {
        scrollOvers.forEach(function (el) {
            //half way through the image
            const appearInAt = (window.scrollY + window.innerHeight) - el.offsetHeight / 2;
            //bottom of image
            const overBottom = el.offsetTop + el.offsetHeight;
            const overHalfShown = appearInAt > el.offsetTop;
            const isNotScrolledPast = window.scrollY < overBottom;
    
            if (overHalfShown && isNotScrolledPast) {
                el.style.opacity = ".75"
            } else {
                el.style.opacity = "0"
            }
        })
    
        scrollTexts.forEach(function (elT) {
    
            //half way through the image
            const appearInAt2 = (window.scrollY + window.innerHeight) - elT.offsetHeight /2;
            //bottom of image
            const overBottom2 = elT.offsetTop + elT.offsetHeight;
            const overHalfShown2 = appearInAt2 > elT.offsetTop;
            const isNotScrolledPast2 = window.scrollY < overBottom2;
    
            if (overHalfShown2 && isNotScrolledPast2) {
    
                elT.style.opacity = "1"
            } else {
    
                elT.style.opacity = "0"
            }
        })
    }
    
}
