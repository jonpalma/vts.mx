idleTimer = null;
idleState = false;
idleWait = 2000;

(function ($) {
    $(document).ready(function () {
        $('*').bind('mousemove keydown scroll', function () {

        clearTimeout(idleTimer);

        if (idleState == true) { 
            // Reactivated event
            $('html').removeClass('idle');
            $('html').addClass('no-idle');
        }

        idleState = false;
        idleTimer = setTimeout(function () {
            // Idle Event
            $('html').addClass('idle');
            $('html').removeClass('no-idle');
            idleState = true; }, idleWait);
        });
        $("body").trigger("mousemove");
    });
}) (jQuery)