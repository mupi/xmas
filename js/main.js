(function() {
    if( window.innerWidth >= 750 ) {
        var skrollr = document.createElement('script');
            skrollr.type = 'text/javascript';
            skrollr.src = 'js/skrollr.js';
		var kid_animation = document.createElement('script');
            kid_animation.type = 'text/javascript';
            kid_animation.src = 'js/kid-animation.js';

        var s = document.getElementById('mainjs');
            s.parentNode.insertBefore(skrollr, s);
            s.parentNode.insertBefore(kid_animation, s);
    }
})();