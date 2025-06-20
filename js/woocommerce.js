"use strict";

/**/
	/* MARK */
	/**/
	jQuery(document).ready(function ($){
		$(".stars").ready(function (){
			var rtl = typeof cws_is_rtl == 'function' ? cws_is_rtl() : false;
			var stars_active = false;
			$(".woocommerce .stars").on("mouseover", function(){
				if (!stars_active){
					$(this).find("span:not(.stars-active)").append("<span class='stars-active' data-set='no'>&#xf005;&#xf005;&#xf005;&#xf005;&#xf005;</span>");
					stars_active = true;
				}
			});
			$(".woocommerce .stars").on("mousemove", function (e){
				var width = $(this).width();
				var cursor = e.pageX;
				var ofs = $(this).offset().left;
				var fill = rtl ? width - ( cursor - ofs ) : cursor - ofs;
				var persent = Math.round(100*fill/width);
				$(".woocommerce .stars .stars-active").css("width",String(persent)+"%");
			});
			$(".woocommerce .stars").on("click", function (e){
				var width = $(this).width();
				var cursor = e.pageX;
				var ofs = $(this).offset().left;
				var fill = rtl ? width - ( cursor - ofs ) : cursor - ofs;
				var persent = Math.ceil( Math.round( 100 * ( fill/width ) ) / 20 ) * 20;
				var mark = $(this).find(".stars-active");
				mark.css('width',String(persent)+"%");
				mark.attr("data-set",String(persent));
			});
			$(".woocommerce .stars").on("mouseleave", function (e){
				var mark = $(this).find(".stars-active");
				if (mark.attr("data-set") == "no"){
					mark.css("width","0");
				}
				else{
					var persent = mark.attr("data-set");
					mark.css("width",String(persent)+"%");
					$(".stars-active").addClass("fixed-mark");
				}
			});
		});

		var noticeID   = $( '.woocommerce-store-notice' ).data( 'notice-id' ) || '',
			cookieName = 'store_notice' + noticeID;

		// Check the value of that cookie and remove the notice class accordingly
		if ( 'hidden' === Cookies.get( cookieName ) ) {
			$( 'body' ).removeClass('cws_store_notice');
		}

		// hide the store notice padding when the dismiss button is clicked
		$( '.woocommerce-store-notice__dismiss-link' ).on( 'click', function( event ) {
			$( 'body' ).removeClass('cws_store_notice');
			event.preventDefault();
		});

	})


/* Search icon hover */
jQuery(document).ready(function ($){
	$( "#searchform #searchsubmit" ).mouseover(function() {
  		$("#searchform div").addClass( "hover-search" );
	});
	$( "#searchform #searchsubmit" ).mouseout(function() {
  		$("#searchform div").removeClass( "hover-search" );
	});
});

/* Search icon hover */

/****************** \PB ********************/

/***********************************************/

