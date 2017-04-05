export default class {
    construct() {

    }

    static setupFadeIn() {
        const $ = require('jquery');

        const element = document.getElementById("js-fadeInElement");
        $(element).addClass('js-fade-element-hide');

        $(window).scroll(function() {
            if( $("#js-fadeInElement").length > 0 ) {
                const elementTopToPageTop = $(element).offset().top;
                const windowTopToPageTop = $(window).scrollTop();
                const windowInnerHeight = window.innerHeight;
                const elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
                const elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
                const distanceFromBottomToAppear = 300;

                if(elementTopToWindowBottom > distanceFromBottomToAppear) {
                    $(element).addClass('js-fade-element-show');
                }
                else if(elementTopToWindowBottom < 0) {
                    $(element).removeClass('js-fade-element-show');
                    $(element).addClass('js-fade-element-hide');
                }
            }
        });
    }
};