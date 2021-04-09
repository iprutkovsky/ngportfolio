; (function () {

    'use strict';

    // Containers fading script
    let contentWayPoint = function () {
        let i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction == 'down' && !$(this.element).hasClass('animated')) {
                ++i;
                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (v) {
                        let e = $(this);
                        setTimeout(function () {
                            switch (e.data('animate-effect')) {
                                case 'fadeInLeft':
                                    e.addClass('fadeInLeft animated');
                                    break;
                                case 'fadeInRight':
                                    e.addClass('fadeInRight animated');
                                    break;
                                case 'fadeInUp':
                                    e.addClass('fadeInUp animated');
                                    break;
                                default:
                                    e.addClass('fadeInDown animated');
                            }
                            e.removeClass('item-animate');
                        }, v * 380, 'easeInOutExpo');
                    });
                }, 900);
            }

        }, { offset: '85%' });
    };

    contentWayPoint();

}());