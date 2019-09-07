document.addEventListener("onwheel", { passive: false });

var inCorrectValue;
	function checkFields(form){
	$name = form.find('[name = name]');
	$tel = form.find('[name = tel]');
	$email = form.find('[name = email]');
	inCorrectValue = [];
	if( $name.val().length <= 1 ){
		inCorrectValue.push($name);
	}
	if( $email.val().indexOf('@') == -1 ){
		inCorrectValue.push($email);
	}
	if( $tel.val().length <= 9 ){
		inCorrectValue.push($tel);
	}
	inCorrectValue.forEach(function(item, i, arr) {
	if( $(item).is(' [name = email] ') ){
		$placeholder = 'Поле e-mail должно содержать символ @';
	}else if( $(item).is(' [name = tel] ') ){
		$placeholder = 'Поле телефон должно содержать минимум 10 цифр';
	}else if( $(item).is(' [name = name] ') ){
		$placeholder = 'Поле имя должно содержать минимум 3 символа';
	}
	  $(item).attr('placeholder', $placeholder);
	  $(item).data('last-value', $(item).val() );
	  $(item).val('');
	  $(item).addClass('wrong_data');
	});
	if( inCorrectValue.length > 0 ){
		return false;
	}
	return true;
}
$(document).ready(function($) {

	// Scroll
	if(document.documentElement.clientWidth > 900){
		$("main").onepage_scroll({
			sectionContainer: ".scroll",
   			easing: "ease",
   			beforeMove: function(){
   				var number = $('section.active').attr('data-sec');
				$('.arrows .uppp').text(number);
   			}    
		});
			
		$(".up").on('click',  function(event) {
			event.preventDefault();
			$("main").moveUp();
			var number = $('section.active').attr('data-sec');
			$('.arrows .uppp').text(number);
		});
		$(".down").on('click',  function(event) {
			event.preventDefault();
			$("main").moveDown();
			var number = $('section.active').attr('data-sec');
			$('.arrows .uppp').text(number);
		});
	}else{
		$(".main_mobile").onepage_scroll({
			sectionContainer: ".section_mob",
   			easing: "ease",       
		});
	}

	// video
	 sizeTheVideo();
	 $(window).resize(function(){
	 sizeTheVideo();
  		});  

	function sizeTheVideo(){
	 	// - 1.78 is the aspect ratio of the video
		// - This will work if your video is 1920 x 1080
		// - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
	    var aspectRatio = 1.78;
	  
	    var video = $('.youtube_video iframe');
	    var videoHeight = video.outerHeight();
	    var newWidth = videoHeight*aspectRatio;
			var halfNewWidth = newWidth/2;
	    
	  //Define the new width and centrally align the iframe
	  video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
	}

	// modal
	$(".modal").each( function(){
	    $(this).wrap('<div class="overlay"></div>')
	});
	$(".open-modal").on('click', function(e){
	    e.preventDefault();
	    e.stopImmediatePropagation;
	    
	    var $this = $(this),
	            modal = $($this).data("modal");
	    
	    $(modal).parents(".overlay").addClass("open");
	    setTimeout( function(){
	        $(modal).addClass("open");
	    }, 350);
	    
	    $(document).on('click', function(e){
	        var target = $(e.target);
	        
	        if ($(target).hasClass("overlay")){
	            $(target).find(".modal").each( function(){
	                $(this).removeClass("open");
	            });
	            setTimeout( function(){
	                $(target).removeClass("open");
	            }, 350);
	        }
	        
	    });
	    
	});
	$(".close-modal").on('click', function(e){
	    e.preventDefault();
	    e.stopImmediatePropagation;
	    
	    var $this = $(this),
	            modal = $($this).data("modal");
	    
	    $(modal).removeClass("open");
	    setTimeout( function(){ 
	        $(modal).parents(".overlay").removeClass("open");
	    }, 350);
	    
	}); 

	// img hover
	$('.case').mouseenter(function(){
		var id = $(this).attr('data-tab'),
       	content = $('.photo_hidden[data-tab="'+ id +'"]');

		$('.hidden').css({
			opacity:'1',
			zIndex:'20'
		});

		content.css({
			display:'block'
		});
	});

	$('.photo_hidden').mouseleave(function(){
		$('.hidden').css({
			opacity:'0',
			zIndex:'-3'
		});

		$(this).css({
			display:'none'
		});
	});

	// Mask input
	$.mask.definitions['~']='[+]';
	$("input[name=tel]").mask("~9 (999) 999-99-99",{autoclear: false});

	// form send
	$('form .send').click(function(e) {
		e.preventDefault();
		$form = $(this).closest('form');
		if( checkFields($form)){
			$.ajax({
			  type: "POST",
			  url: "mail.php",
			  data: $form.serialize(),
			  success: function(msg){
			   $form[0].reset();
			   $("#success").click();
			  }
			});
		}
	});
	// Form name 
	$('.send').click(function(event){
		var formName = $(this).attr('data-meta');
		$('form input[name = hide]').val(formName);
		console.log(formName);
	});
	$('.call a').click(function(event){
		var formNameCall = $(this).attr('data-meta');
		$('form input[name = hide]').val(formNameCall);
		console.log(formNameCall);
	});
	$('.card_info a').click(function(event){
		var formNameGetMore = $(this).attr('data-meta');
		$('form input[name = hide]').val(formNameGetMore);
		console.log(formNameGetMore);
	});

	// sliders
	$('.slider_1').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	$('.slider_2').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	$('.slider_3').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	$('.slider_4').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	$('.slider_5').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
	$('.slider_6').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1
	});
});