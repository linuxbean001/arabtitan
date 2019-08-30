$(function(){
	
	
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		touchDrag  : true,
		 mouseDrag  : true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
				nav:true
			},
			1024:{
				items:1,
				nav:true
			},
			640:{
				items:1,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	$('.owl-carousel-inner').owlCarousel({
		loop:false,
		lazyLoad:false,
		margin:0,
		autoplay:false,
		autoplayTimeout:5000,
		touchDrag  : false,
		 mouseDrag  : false,
		responsiveClass:false,
		responsive:{
			1366:{
				items:1,
				nav:true
			},
			1024:{
				items:1,
				nav:true
			},
			640:{
				items:1,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	$('.owl-carousel-pro').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:5000,
		touchDrag  : true,
		 mouseDrag  : true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:3,
				nav:true
			},
			1024:{
				items:3,
				nav:true
			},
			640:{
				items:2,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	$('.owl-carousel-icon').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:25,
		autoplay:true,
		autoplayTimeout:5000,
		touchDrag  : true,
		 mouseDrag  : true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:4,
				nav:true
			},
			1024:{
				items:3,
				nav:true
			},
			640:{
				items:2,
				nav:true
			},
			0:{
				items:1,
				nav:true
			}
		}
	})
	
	
		
	function toggleIcon(e) {
		$(e.target)
			.prev('.card-header')
			.find(".more-less")
			.toggleClass('fa-plus fa-minus');
		}
		$('.card').on('hidden.bs.collapse', toggleIcon);
		$('.card').on('shown.bs.collapse', toggleIcon);
		
  $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	
	
	
	var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider?slider.value:'';

slider.oninput = function() {
  output.innerHTML = this.value;
}


	$('.tabs a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var screenwidth= $(window).width();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		var reduceH = $(window).width() == 700?$('.tabs').height():10;
        
		if(screenwidth<=767) { 
			$('html,body').animate({
			  scrollTop: target.offset().top - reduceH-100
			}, 1000);
		}
		
		else { 
			$('html,body').animate({
			  scrollTop: target.offset().top - reduceH-71
			}, 1000);
		}
		$("#bs-example-navbar-collapse-1").removeClass("in");
        return false;
      }
    }
  });
  
  $('.red-button a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var screenwidth= $(window).width();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		var reduceH = $(window).width() == 700?$('.tabs').height():10;
        
		if(screenwidth<=767) { 
			$('html,body').animate({
			  scrollTop: target.offset().top - reduceH-100
			}, 1000);
		}
		
		else { 
			$('html,body').animate({
			  scrollTop: target.offset().top - reduceH-71
			}, 1000);
		}
		$("#bs-example-navbar-collapse-1").removeClass("in");
        return false;
      }
    }
  });
  
   $('.bottom-arrow a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var screenwidth= $(window).width();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
		var reduceH = $(window).width() == 700?$('.tabs').height():10;
        
		if(screenwidth<=767) { 
			$('html,body').animate({
			  scrollTop: target.offset().top - reduceH-100
			}, 1000);
		}
		
		else { 
			$('html,body').animate({
			  scrollTop: target.offset().top - reduceH-71
			}, 1000);
		}
		$("#bs-example-navbar-collapse-1").removeClass("in");
        return false;
      }
    }
  });
		
	
	});
	
	