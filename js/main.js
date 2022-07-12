$('.block__slider-js').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: true,
	speed: 300,
	arrows: true,
	autoplay: false,
	dotsClass: 'slider__dots',
	prevArrow:'<div class = "left-arrow"><svg class= "arrow-svg" width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle r="33.5" transform="matrix(-1 0 0 1 63.5 59.5)" fill="white"/><path d="M65.9297 51L57.8594 59.0703L65.9297 67.1406" stroke="#D13A52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d" x="0" y="0" width="127" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="15"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
	nextArrow:'<div class = "right-arrow"><svg class= "arrow-svg" width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="63.5" cy="53.5" r="33.5" fill="white"/></g><path d="M61.0703 46L69.1406 54.0703L61.0703 62.1406" stroke="#D13A52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_d" x="0" y="0" width="127" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="10"/><feGaussianBlur stdDeviation="15"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
	responsive: [
		{
	      breakpoint: 769,
	      settings: {
	        arrows: false
	      }
	    },
		{
			breakpoint: 741,
			settings: {
			  arrows: false,
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 601,
			settings: {
			  arrows: false,
			  slidesToShow: 1
			}
		},
		
	]
});

$('.block__img-slider-js').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	speed: 300,
	arrows: true,
	autoplay: false,
	dotsClass: 'slider__dots',
	prevArrow:'<div class = "left-arrow"><svg class= "arrow-svg" width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle r="33.5" transform="matrix(-1 0 0 1 63.5 59.5)" fill="white"/><path d="M65.9297 51L57.8594 59.0703L65.9297 67.1406" stroke="#D13A52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d" x="0" y="0" width="127" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="15"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
	nextArrow:'<div class = "right-arrow"><svg class= "arrow-svg" width="127" height="127" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="63.5" cy="53.5" r="33.5" fill="white"/></g><path d="M61.0703 46L69.1406 54.0703L61.0703 62.1406" stroke="#D13A52" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><defs><filter id="filter0_d" x="0" y="0" width="127" height="127" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="10"/><feGaussianBlur stdDeviation="15"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>',
	responsive: [
		{
	      breakpoint: 769,
	      settings: {
	        arrows: false
	      }
	    },
		{
			breakpoint: 632,
			settings: {
			  arrows: false,
			  slidesToShow: 2
			}
		},
		{
			breakpoint: 601,
			settings: {
			  arrows: false,
			  slidesToShow: 1
			}
		},
		
	]
});

$('.popup-click-js').on('click', function() {
	$('.modal__window-background').addClass('visible');
	$('body').css({'overflow-y':'hidden'});
});
$('.popup-close-js').on('click', function() {
	
	$('.modal__window-background').removeClass('visible');
	$('body').css({'overflow-y':'auto'});
	
	
});

function popup (title)
{
	$('.modal__window-header').text(title);
}

function sendFos(theme)
{
	person = $('.modal__window').find('input[id="name"]').val();
	phone = $('.modal__window').find('input[id="phone"]').val();
	message = $('.modal__window').find('textarea[id="message"]').val();
	error = 0;
	if (person == '') {
		$('.modal__window').find('input[id="name"]').css({'border-bottom':'1px solid red'});
		error++;
	} else {
		$('.modal__window').find('input[id="name"]').css({'border-bottom':'1px solid green'});
	}
	if (phone == '') {
		$('.modal__window').find('input[id="phone"]').css({'border-bottom':'1px solid red'});
		error++;
	} else {
		$('.modal__window').find('input[id="phone"]').css({'border-bottom':'1px solid green'});
	}
	if (message == '') {
		$('.modal__window').find('textarea[id="message"]').css({'border-bottom':'1px solid red'});
		error++;
	} else {
		$('.modal__window').find('textarea[id="message"]').css({'border-bottom':'1px solid green'});
	}
	if($('input[type=checkbox]').is(':checked'))
	{
		console.log("OK")
	}
	else
	{
		$('.modal__window').find('.custom-checkbox+label::before').css({'border-bottom':'1px solid red'});
	}
	if (error==0)
	{
		$.ajax({
			type: "POST",
			url: "/ajax/fos.php",
			data: '&person=' + person + '&phone=' + phone + '&message' + message +'&theme=' + theme, 
			success: function (response) {
				$('.form-block').html(response);
			}
		});
		
	}
}

function SendPhone(theme)
{
	
	phone = $('.footer__line').find('input[id="phone-1"]').val();
	error = 0;
	
	if (phone == '') {
		$('.footer__line').find('input[id="phone-1"]').css({'border-bottom':'1px solid red'});
		error++;
	} else {
		$('.footer__line').find('input[id="phone-1"]').css({'border-bottom':'1px solid green'});
	}
	if (error==0)
	{
		$.ajax({
			type: "POST",
			url: "/ajax/fos.php",
			data: '&phone=' + phone +'&theme=' + theme, 
			success: function (response) {
				$('.form-block').html(response);
			}
		});
		
	}
}

$('.policy-click-js').on('click', function() {
	$('.policy-background').addClass('visible');
	$('body').css({'overflow-y':'hidden'});
});
$('.policy-close-js').on('click', function() {
	
	$('.policy-background').removeClass('visible');
	$('body').css({'overflow-y':'auto'});
	
	
});

$('.burger__btn-js').on('click',function()
{
	if ($('.mobile__nav').hasClass("mobile__nav-active") )
	{
		$('.mobile__nav').removeClass("mobile__nav-active");
	}
	else
	{
		$('.mobile__nav').addClass("mobile__nav-active");
	}
	
});

$('.mobile__close-js').on('click',function()
{
	$('.mobile__nav').removeClass("mobile__nav-active");
	
});


	if ($(window).width() < 601)
	{
		$('.mobile-slide-js').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			speed: 300,
			arrows: false,
			autoplay: false,
			dotsClass: 'slider__dots',
			
		});
	}

  


