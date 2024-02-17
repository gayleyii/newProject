document.addEventListener("DOMContentLoaded", function () {
    var loaderContainer = document.getElementById('loader-container');
    loaderContainer.classList.add('loaded');

    var staticLoaderContainer = document.getElementById('static-loader-container');
    staticLoaderContainer.style.display = 'none';

    setTimeout(function () {
        var contentContainer = document.querySelector('.content');
        contentContainer.style.opacity = '1';
        scrollTo(contentContainer.offsetTop, 1000, function () {
            // Callback to be executed after scrolling is complete
            staticLoaderContainer.style.display = 'block';
            loaderContainer.style.display = 'none';
        });
    }, 1000);
});

// Scroll function
function scrollTo(to, duration, callback) {
    const element = document.scrollingElement || document.documentElement;
    const start = element.scrollTop;
    const change = to - start;
    const startDate = new Date().getTime();

    function animateScroll() {
        const currentDate = new Date().getTime();
        const elapsed = currentDate - startDate;

        element.scrollTop = easeInOut(elapsed, start, change, duration);

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            // Call the callback function after scrolling is complete
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    animateScroll();

    const mainParagraph = document.querySelector('.main p');

    mainParagraph.addEventListener('animationend', function () {
    
        const exploreButtonContainer = document.querySelector('.explore-button-container');
        
        exploreButtonContainer.classList.add('show');
    });
}


