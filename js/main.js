(function($){
    "use strict";
    $(function(){
        //scrollFunc();
        $(window).bind('scroll', scrollFunc).resize(scrollFunc);

        // index menu
        $('.history-index>dd>a, header .index li a').click(function(e){
            var eleId = $(this).attr('href');
            var eleOffsetTop = $(eleId).offset().top;
            var headerHeight = $('header').height();
            $('html, body').animate({scrollTop: eleOffsetTop - headerHeight}, 300);
            e.preventDefault();
        });

        // info menu
        $('.more-info>ul>li>a').click(function(e){
            $('.more-info>ul>li').removeClass('on');
            $(this).parent().addClass('on');
            e.preventDefault();
        });

    });

    function getSectionOffsetTop(id) {
        return $('#' + id).offset().top;
    }

    function scrollFunc() {
        var scrollTop = $(window).scrollTop();
        var headerHeight = $('header').height();
        var sectionHeight = ($('.sec1').height())/2;

        $('.side_info').hide();
        $('.period').hide();

        if(scrollTop >= 500){
            $('header').fadeIn(200);
        }else {
            $('header').fadeOut(200);
        }

        if( scrollTop >= 0  && scrollTop < getSectionOffsetTop('sec1') - headerHeight) {
            $('.sec1 .side_info').show();
            $('.sec1 .side_info').removeClass('fixed');
        } else if( scrollTop >= getSectionOffsetTop('sec1') - headerHeight  && scrollTop < getSectionOffsetTop('sec2') - sectionHeight){
            $('.sec1 .side_info').show();
            $('.sec1 .side_info').addClass('fixed');
            $('.bg-layer').css('background-color','#2f3e9e');
        } else if(scrollTop >= getSectionOffsetTop('sec2') - sectionHeight && scrollTop < getSectionOffsetTop('sec3') - sectionHeight){
            $('.sec2 .side_info').show();
            $('.sec2 .period').show();
            $('.bg-layer').css('background-color','#f6be1a');
        } else if(scrollTop >= getSectionOffsetTop('sec3') - sectionHeight && scrollTop < getSectionOffsetTop('sec4') - sectionHeight){
            $('.sec3 .side_info').show();
            $('.bg-layer').css('background-color','#2f3e9e');
        } else if(scrollTop >= getSectionOffsetTop('sec4') - sectionHeight && scrollTop < getSectionOffsetTop('sec5') - sectionHeight){
            $('.sec4 .side_info').show();
            $('.sec4 .period').show();
            $('.bg-layer').css('background-color','#429f46');
        } else if(scrollTop >= getSectionOffsetTop('sec5') - sectionHeight && scrollTop < getSectionOffsetTop('sec6') - sectionHeight){
            $('.sec5 .side_info').show();
            $('.sec5 .period').show();
            $('.bg-layer').css('background-color','#9d9d9d');
        } else if(scrollTop >= getSectionOffsetTop('sec6') - sectionHeight && scrollTop < getSectionOffsetTop('sec7') - sectionHeight){
            $('.sec6 .side_info').show();
            $('.bg-layer').css('background-color','#2f3e9e');
        } else if(scrollTop >= getSectionOffsetTop('sec7') - sectionHeight && scrollTop < getSectionOffsetTop('sec8') - sectionHeight){
            $('.sec7 .side_info').show();
            $('.bg-layer').css('background-color','#2f3e9e');
        } else if(scrollTop >= getSectionOffsetTop('sec8') - sectionHeight && scrollTop < getSectionOffsetTop('sec9') - sectionHeight){
            $('.sec8 .side_info').show();
            $('.sec8 .period').show();
            $('.bg-layer').css('background-color','#00685b');
        } else if(scrollTop >= getSectionOffsetTop('sec9') - sectionHeight && scrollTop < getSectionOffsetTop('sec10') - sectionHeight){
            $('.sec9 .side_info').show();
            $('.sec9 .period').show();
            $('.bg-layer').css('background-color','#da4336');
        } else if(scrollTop >= getSectionOffsetTop('sec10') - sectionHeight && scrollTop < getSectionOffsetTop('sec11') - sectionHeight){
            $('.sec10 .side_info').show();
            $('.sec10 .period').show();
            $('.bg-layer').css('background-color','#44269f');
        } else if(scrollTop >= getSectionOffsetTop('sec11') - sectionHeight && scrollTop < getSectionOffsetTop('sec12') - sectionHeight){
            $('.sec11 .side_info').show();
            $('.sec11 .period').show();
            $('.bg-layer').css('background-color','#f5bd19');
        } else if(scrollTop >= getSectionOffsetTop('sec12') - sectionHeight && scrollTop < getSectionOffsetTop('sec13') - sectionHeight){
            $('.sec12 .side_info').show();
            $('.sec12 .period').show();
            $('.bg-layer').css('background-color','#2f3e9e');
        } else if(scrollTop >= getSectionOffsetTop('sec13') - sectionHeight && scrollTop < getSectionOffsetTop('sec14') - sectionHeight){
            $('.sec13 .side_info').show();
            $('.sec13 .period').show();
            $('.bg-layer').css('background-color','#526cfd');
        } else if(scrollTop >= getSectionOffsetTop('sec14') - sectionHeight && scrollTop < getSectionOffsetTop('sec15') - sectionHeight){
            $('.sec14 .side_info').show();
            $('.sec14 .period').show();
            $('.bg-layer').css('background-color','#2f3e9e');
        } else if(scrollTop >= getSectionOffsetTop('sec15') - sectionHeight && scrollTop < getSectionOffsetTop('sec16') - sectionHeight){
            $('.sec15 .side_info').show();
            $('.sec15 .period').show();
            $('.bg-layer').css('background-color','#9d9d9d');
        } else if(scrollTop >= getSectionOffsetTop('sec16') - sectionHeight && scrollTop < getSectionOffsetTop('sec17') - sectionHeight){
            $('.sec16 .side_info').show();
            $('.sec16 .period').show();
            $('.bg-layer').css('background-color','#2d7c31');
        } else if(scrollTop >= getSectionOffsetTop('sec17') - sectionHeight && scrollTop < getSectionOffsetTop('sec18') - sectionHeight){
            $('.sec17 .side_info').show();
            $('.sec17 .period').show();
            $('.bg-layer').css('background-color','#009587');
        } else if(scrollTop >= getSectionOffsetTop('sec18') - sectionHeight && scrollTop < getSectionOffsetTop('sec19') - sectionHeight){
            $('.sec18 .side_info').show();
            $('.sec18 .period').show();
            $('.bg-layer').css('background-color','#da4336');
        } else if(scrollTop >= getSectionOffsetTop('sec19') - sectionHeight && scrollTop < getSectionOffsetTop('xe-event') - sectionHeight*2){
            $('.sec19 .side_info').show();
            $('.sec19 .period').show();
            $('.bg-layer').css('background-color','#44269f');
        } else if(scrollTop >= getSectionOffsetTop('xe-event') - sectionHeight*2){
            $('.xe-event .side_info').show();
            $('.xe-event .period').show();
            $('.bg-layer').css('background-color','#526cfd');
        }
    }

})(jQuery);
