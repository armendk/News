(function($){
	
	"use strict";

	var demo_cache = false;

	function demo_isotope()
	{
		var demo = $(".jnews-demo-content .grid").isotope({
	        itemSelector: ".grid-item",
	        layoutMode: "fitRows"
	    });

	    demo_filter(demo);
	}

	function demo_carousel()
	{
		$('.jnews-demo-content .owl-carousel').owlCarousel({
            items : 1,
            dots: true,
            navText: false,
            nav: true,
            lazyLoad:true,
        });
	}

	function demo_pane()
	{
		var wrapper = $('.jnews-demo-wrapper'),
			element = wrapper.find('.jnews-demo-content'),
			height  = wrapper.outerHeight(),
			width   = wrapper.outerWidth();

		element.css({
			'height': height + 'px'
		});
	}

	function demo_filter(demo)
	{
		$('.jnews-demo-wrapper').on('click', '.jnews-demo-content .filter a', function(e)
		{
			e.preventDefault();

			var element = $(this),
				parent  = element.parents('.jnews-demo-content'),
				filter 	= element.data('filter');

			parent.find('.filter li').removeClass('active');
			element.parent().addClass('active');

			demo.isotope({
	            filter : filter
	        });

	        demo_pane();
		});
	}

	function demo_resize()
	{
		$(window).resize( function() 
		{
		    demo_pane();
		});
	}

	function demo_open( content )
	{
		$('.jnews-demo-wrapper').append(content);
		demo_pane();
		demo_isotope();
		demo_carousel();
	}

	function demo_init()
	{
		$('.jnews-demo-panel .switcher-button').bind('click', function()
		{
			$('body').addClass('jnews-demo-show');
			demo_pane();
			demo_isotope();
			demo_carousel();
		});

		$('.jnews-demo-overlay, .jnews-demo-wrapper .close-button').bind('click', function()
		{
            $('body').removeClass('jnews-demo-show');
        });
	}

	function demo_social_login()
	{
		setTimeout(function() 
		{
			if ( window.location.href.indexOf("jnews_social_login") > -1 && ! $('.logged-in').length ) 
			{
		       $.magnificPopup.open({
			        items: {
			            src: '#jnews_social_login' 
			        },
			        type: 'inline',
                    removalDelay: 500,
			        callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = 'mfp-zoom-out';
                            $('body').removeClass('jeg_show_menu');
                        }
                    }
			    });
		    }
		}, 500);
	}


	/** dispatch **/
	function dispatch()
	{
		demo_init();
		demo_resize();
		demo_social_login();
	}

	$(document).ready(function()
	{
		dispatch();
	});

})(jQuery);