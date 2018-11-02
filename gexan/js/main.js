$(document).ready(function() {
    $('.header-video').append('<video src="http://gexan.io/assets/theme/GEXAN1.mp4" class="header-video_bg" autoplay="true" muted></video>');
    if (document.body.clientWidth > 960) {
        setTimeout(function(){
            $('.header-video').fadeOut('slow');
            $('.main-header').css('background-image', 'url(http://gexan.io/assets/theme/img/bg1.jpg');
            $('.cover-content').animate({opacity: 1}, 1000);
        }, 10000);
    } else {
        $('.header-video').css('display', 'none');
        $('.main-header').css('background-image', 'url(http://gexan.io/assets/theme/img/bg1.jpg');
        $('.cover-content').animate({opacity: 1}, 1000);
    }
	$('.single-slide').slick({
		speed: 600,
		dots: false,
		nextArrow: '.stage-next',
		prevArrow: '.stage-prev'
	});
	$('.stage-btn').on('click', function(event) {
		$('.stage-btn, .rs-number').fadeOut(300);
		setTimeout(function(){
			$('.stage-btn, .rs-number').fadeIn(300);
		}, 500);
	});

	$('.howpl-item_btn-vis').click(function(){
		$(this).toggleClass('active');
		var parentTab = $(this).parents('.hpl-block');
		parentTab.find('.howpl-item_hide').toggle();
	});

	$('.soon').click(function(e){
		var newLeft = e.pageX - 175;
		var newTop = e.pageY + 50;
		$('.soon-warn').css({
			left: newLeft + 'px',
			top: newTop + 'px'
		});
		$('.soon-warn').fadeIn();
		setTimeout(function(){
			$('.soon-warn').fadeOut();
		}, 1500);
	});
	//Создание таймера
            function create_target_date(){
                var target_date = new Date();
                target_date.setHours(23,59,59);
                return target_date;
            }
 
            //Вычисление
            function calculation_timer(){
                var target_date = create_target_date();
                var current_date = new Date();
                val_timer = target_date.getTime() - current_date.getTime();
 
                var hours = Math.floor(val_timer/1000/60/60);
                var minutes = Math.floor((val_timer-hours*60*60*1000)/1000/60);
                var seconds = Math.floor(((val_timer-hours*60*60*1000)-minutes*60*1000)/1000);
                
                var hoursPrefix = '';
                var minutesPrefix = '';
                if (hours < 10) {
                	hoursPrefix = '0';
                }
                if (minutes < 10) {
                    minutesPrefix = '0';
                }
                $('.hour, .presale-timer_item-hour').text(hoursPrefix + hours);
                $('.min, .presale-timer_item-min').text(minutesPrefix + minutes);
                $('.sec, .presale-timer_item-sec').text(seconds);
            }
 
            //Запуск таймера
            function start_timer(){
                calculation_timer();
                id_timer = setInterval(calculation_timer,1000);
            }
            start_timer();
            if (document.body.clientWitdh > 650) {
                $('.mht-lang').hover(function() {
                	$('.mht-lang_item-en').addClass('hover');
                }, function() {
                	$('.mht-lang_item-en').removeClass('hover');
                });
            } else {
                $('.mht-lang_item').click(function(e) {
                    $('.mht-lang_item-en').addClass('hover');
                }
            )};
    $("a.scroll").click(function() {
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, {
            duration: 800
        });
       return false;
    });
    $('.mobile-menu').click(function(e){
        $('.mobile-menu_icon').toggleClass('active');
        $('.main-nav').toggleClass('active');
    });
    $('.contact-form').submit(function(event){
        $.ajax({
            url: '../getmail.php',
            type: 'POST',
            data: $(this).serialize()
        })
        .done(function() {
            console.log('Success');
        });
        event.preventDefault();
        return false;
    });
    // if ($('.news-item').length > 1) {
    //     $('.news-list').slick({
    //         speed: 600,
    //         slidesToShow: 3,
    //         dots: false,
    //         arrows: false, 
    //         infinite: false
    //     });
    // }
});