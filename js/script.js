$( document ).ready(function() {

	/*** Function to show submenu when hovering over menu list item ***/
	$('.nav li a').hover(function() {
		/* 	Getting value of data attribute "menu-item" from hovered menu-elemnt */
		var nav_id = $(this).attr('data-menu-item');
		
		/* Remove class 'active' for all menu list items and submenu elements */
		$('.nav li a').removeClass('active');
		$('.nav__submenu').removeClass('active');
		
		/*	Add class 'active' to hovered menu list item and to it's submenu 
			with data attribute "menu" equal to value from av_id
		*/
		$(this).addClass('active');
		$('.nav__submenu[data-menu=' + nav_id + ']').addClass('active');
	});

	/*** Function to show submenu images when hovering over submenu list item ***/
	$('.submenu li').hover(function() {
		/*	Getting value of data attribute "submenu-item" from hovered submenu-elemnt */
		var submenu_id = $(this).find('a').attr('data-submenu-item');
		
		/* Remove class 'active' for all submenu list items and submenu--image items  */
		$('.submenu li').removeClass('active');
		$('.submenu__image--item').removeClass('active');
		
		/*	Add class 'active' to hovered submenu list item and to it's submenu image item 
			with data attribute "submenu" equal to value from submenu_id
		*/
		$(this).addClass('active');
		$('.submenu__image--item[data-submenu=' + submenu_id + ']').addClass('active');
	});

	/*** Remove class 'active' (hide) from submenu when hovering over main area ***/
	$('.main').hover(function(){
		$('.nav__submenu').removeClass('active');
	});

	/*** Open Search box by clicking on magnifier in header ***/
	$('.search__button a').click(function(){
		$('.search__overlay').addClass('is-visible');
	});

	/*** Close Search box by clicking on X ***/
	$('.search__overlay--close a').click(function(){
		$('.search__overlay').removeClass('is-visible');
	});

	/*** Add & remove classes to body, mobile submenu and to mobile hamburger icon on click on mobile burger ***/
	$('.mobile__hamburger-menu').click(function() {
		$('.mobile__hamburger--icon, .mobile__submenu').toggleClass('is-visible');
		$('body').toggleClass('no-scroll');
	});
});