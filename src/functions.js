const smoothScroll = (target, duration) => {
    var targetPosition = target.offsetTop - 120; // Added offset
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

const scrollToSection = (id) => {
    var target = document.getElementById(id);
    smoothScroll(target, 1000); // 1000ms duration
};


export { scrollToSection }