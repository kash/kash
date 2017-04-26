(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-80112402-1', 'auto');
ga('send', 'pageview');

var menu_open = false;

$('#nav-menu-button').click(function(){
	if (menu_open){
		$('.gh-svg-rect-top').css('transform', 'rotate(0deg) translate3d(0px, -8px, 0px)');
		$('.gh-svg-rect-bottom').css('transform', 'rotate(0deg) translate3d(0px, 8px, 0px)');
		$('.gh-svg-rect').css('fill', '#000000');
		$('.box').animate({
			marginTop: '30px'
		}, 300);
		$('.box-container').fadeOut(300);
		menu_open = false;
	}else{
		$('.gh-svg-rect-top').css('transform', 'rotate(45deg) translate3d(0px, 0px, 0px)');
		$('.gh-svg-rect-bottom').css('transform', 'rotate(-45deg) translate3d(0px, 0px, 0px)');
		$('.box-container').fadeIn(300).css('display', 'flex');
		$('.box').animate({
			marginTop: '0'
		}, 300);
		$('.gh-svg-rect').css('fill', '#ffffff');
		menu_open = true;
	}
});
