(function() {
    var triggerBttn = document.getElementsByClassName( 'trigger-overlay' );

        var overlay = document.querySelector( 'div.overlay' );
        var closeBttn = overlay.querySelector( '.overlay-close' );
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };

    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.add( overlay, 'close' );
            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close' );
            };



            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }

            $( "body" ).removeClass( "noscroll" );

        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add( overlay, 'open' );
            $( "body" ).addClass( "noscroll" );
        }



        $("div.overlay").animate({ scrollTop: 0 }, "slow");


    }


    //esc key to close overlay
    $(document).bind('keydown',function(e){
        if ( e.which == 27 ) {
            toggleOverlay();
        };
    });



    closeBttn.addEventListener( 'click', toggleOverlay );
    for( var i = 0; i < triggerBttn.length; i++) {
        triggerBttn[i].addEventListener( 'click', toggleOverlay );
    }
    


    return false;
})();
