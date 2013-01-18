/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:false, undef:true, unused:true, curly:true, browser:true, indent:4, maxerr:50 */
(function ($) {
    $.fn.toggleSlide = function (objclass) { // objclass <- przekazujemy nazwę klasy css-owej obiektu, na którym użyjemy pluginu 

        return this.each(function () {
            $(this).click(function () {
                $('.' + objclass).not($(this)).slideUp();
                $('.' + objclass + ':hidden').slideDown();
            });
        });
    };
})(jQuery);


//(function ($) {

//    $.fn.validateText = function (options) {
//        return this.each(function () {
//            var settings = $.extend({
//                pattern: /.*/g, //dowolne dopasowanie
//                tooltip: "Dowolny ciąg znaków"
//            }, options);
//            var pattern = settings.pattern;
//            pattern.compile(pattern);
//            //			$(this).wrap("<span />");
//            $(this).css("border", "solid 1px #00CF00");
//            $(this).before("<div style='display:none;font-size:50%'>" + settings.tooltip + "</div>");
//            $(this).keyup(function () {
//                if (pattern.test($(this).val())) {
//                    $(this).css("border", "solid 1px #00CF00");
//                } else {
//                    $(this).css("border", "solid 1px #7e0000");
//                }
//            });
//            $(this).hover(function () {
//                var position = $(this).offset();
//                $(this).prev("div").css("display", "block");
//                $(this).prev("div").css("position", "absolute");
//                $(this).prev("div").css("left", position.left);
//                $(this).prev("div").css("top", position.top - 12);
//                $(this).prev("div").css("z-index", "1");
//            }, function () {
//                $(this).prev("div").css("display", "none");
//            });

//        });
//    };

//})(jQuery);