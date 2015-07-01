

$( document ).ready(function() {

        function bindEvent() {
            $(".event-region-text").hover(function () {
                $(this).parent().find('.event-region').hover();
            });
        }

        bindEvent();

    }
);


