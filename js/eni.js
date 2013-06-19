(function ( $ ) {
	$.fn.eni = function(options){

		var opts = $.extend( {}, $.fn.eni.defaults, options );
 
		var titleDiv=$('<div/>');
		titleDiv.addClass(opts.css.title);
		titleDiv.html(opts.title);
	
		this.append(titleDiv);
	}; 

	$.fn.eni.defaults = {
		title : 'Titre du jeu',
		css : {
			title : 'eni-title'
		}
	};
}(jQuery));