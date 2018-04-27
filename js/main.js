$(document).ready(function(){
    $("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
        $(".top").toggleClass("close");
        $(".menu_icon").toggleClass("hide");
	});
});