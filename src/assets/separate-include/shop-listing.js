(function($){
	var filtersToggle = $('#js-filters-toggle'),
		filtersCol = $('#aside-js'),
		$body = $('body'),
		$html = $('html');

	if (filtersToggle.length && filtersToggle.length){
		$('body').on('click', '#js-filters-toggle', function (e){
			$(this).hasClass('tt-open-col') ? closeCol() : openCol();
		});
		function openCol($this){
			filtersToggle.addClass('tt-open-col');
			var ttScrollValue = $body.scrollTop() || $html.scrollTop();
			filtersCol.addClass('column-open').perfectScrollbar();
			$body.css("top", - ttScrollValue).addClass("no-scroll").append('<div id="modal-filter"></div>');
			var modalFilter = $('#modal-filter').fadeTo('fast',1);
			if (modalFilter.length) {
				modalFilter.on('click', function(){
					closeCol();
				})
			}
			return false;
		};
		function closeCol($this){
			filtersCol.removeClass('column-open').perfectScrollbar('destroy');
			var top = parseInt($body.css("top").replace("px", ""), 10) * -1;
			filtersToggle.removeClass('tt-open-col');
			$body.removeAttr("style").removeClass("no-scroll").scrollTop(top);
			$html.removeAttr("style").scrollTop(top);
			$("#modal-filter").off().remove();
			return false;
		};
		$(window).on('resize', function(){
			if($body.hasClass('no-scroll')){
				closeCol();
			};
		});
	};
})(jQuery);
(function($){
	var priceSlider = $('#slider-snap');
	if (!priceSlider.length) return false;

	var initPriceSlider = (function () {
		var snapSlider = document.getElementById('slider-snap');
	   if (snapSlider){
			noUiSlider.create(snapSlider, {
			  start: [ 10, 5000 ],
			  snap: true,
			  connect: true,
			  range: {
				'min': 10,
				'10%': 10,
				'20%': 1000,
				'30%': 2500,
				'40%': 2000,
				'50%': 3500,
				'60%': 3000,
				'70%': 3500,
				'80%': 4000,
				'00%': 4500,
				'max': 5000
			  }
			});
			var snapValues = [
			  document.getElementById('slider-snap-value-lower'),
			  document.getElementById('slider-snap-value-upper')
			];
			snapSlider.noUiSlider.on('update', function( values, handle ) {
			  snapValues[handle].innerHTML = values[handle];
			});
		};
	}());
})(jQuery);