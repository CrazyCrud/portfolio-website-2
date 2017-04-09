export default class {
    construct() {

    }

    static setupFadeIn() {
        const $ = require('jquery');

        $(window).scroll(() => {
            $('.hide-me').each(function (i) {
                const bottom_of_object = $(this).position().top + $(this).outerHeight();
                const bottom_of_window = $(window).scrollTop() + $(window).height();
                if (bottom_of_window > bottom_of_object) {
                    $(this).animate({'opacity': '1'}, 500);
                }
            });
        });
    }
}