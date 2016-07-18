var isMenuVisible = true;
var tougleMenu = function () {
	/*var menu = document.getElementById("topnavigationmenu");
	if (menu == null) {
		alert(null);
		return;
	}*/
	if (isMenuVisible)
		//menu.style.display = "none";
		$("#topnavigationmenu").css("visibility", "hidden");
	else
		//menu.style.display = "inline-block";
		$("#topnavigationmenu").css("visibility", "visible");

	isMenuVisible = !isMenuVisible;
}



$( window ).resize(function() {
  if ($(window).width() > 1290)
  	isMenuVisible = false;
});

var sliderSelestedInageNum = 1;

var sliderImageClicked = function(num) {
	if (sliderSelestedInageNum != num)
	{
			var image = document.getElementById("slider-image-" + sliderSelestedInageNum);
			image.className = "image"
			sliderSelestedInageNum = num;
			image = document.getElementById("slider-image-" + sliderSelestedInageNum);
			image.className += " selected";

		
		/*$("#slider-image-main").attr(
			"src", "images/xmen0" + sliderSelestedInageNum + ".jpg");*/

		$('#slider-image-main').css({'background-image' : "url(\"images/xmen0" + sliderSelestedInageNum + ".jpg\")"});
		//centerImage($('#slider-image-main'), $('.slider-image-main-container'));
	}
}

var sliderButtonPress = function (side) {
	if (side) //right 
	{
		if (sliderSelestedInageNum < 6) {
			var image = document.getElementById("slider-image-" + sliderSelestedInageNum);
			image.className = "image"
			sliderSelestedInageNum++;
			image = document.getElementById("slider-image-" + sliderSelestedInageNum);
			image.className += " selected";
			$("#slider-image-main").attr(
			"background-image", "url(\"images/xmen0" + sliderSelestedInageNum + ".jpg\")");
			//centerImage($('#slider-image-main'), $('.slider-image-main-container'));
		}
		
	}
	else {
		if (sliderSelestedInageNum > 1) {
			var image = document.getElementById("slider-image-" + sliderSelestedInageNum);
			image.className = "image"
			sliderSelestedInageNum--;
			image = document.getElementById("slider-image-" + sliderSelestedInageNum);
			image.className += " selected";
			$("#slider-image-main").attr(
			"background-image", "url(\"images/xmen0" + sliderSelestedInageNum + ".jpg\")");
			//centerImage($('#slider-image-main'), $('.slider-image-main-container'));
		}
		
	}

}



var centerImage = function(sliderMainImage, container) {
	var needHeight = container.height();
	var needWidth = container.width();
		
	var iWidth = sliderMainImage.width();
	var iHeight = sliderMainImage.height();

	var scale = iWidth / iHeight;

	var marginLeft = 0;
	var marginTop = 0;

	var marginTop = 0;


	if (iHeight < needHeight) {
		iHeight = needHeight;
		iWidth = iHeight * scale;

		marginLeft = (needWidth - iWidth)/2;
	}
	else
	 {
		iWidth = needWidth;
		iHeight = iWidth/ scale;

		marginTop = (needHeight - iHeight)/2

	}

	sliderMainImage.css({'height': iHeight, 'width': iWidth
		, 'margin-left' : marginLeft, 'margin-top' : marginTop});
}


window.onload = function() {

	var index1 = 11;
	$('.image.big img').each(function() {
		var image = "url(\"images/xmen" + index1 + ".jpg\")";
		index1 ++;
	    $(this).css({'background-image' : image})	   
	});

	index1 = 1

	$('.thumbnails .image-container .image img').each(function() {
		var image = "url(\"images/xmen0" + index1 + ".jpg\")";
		index1 ++;
	    $(this).css({'background-image' : image})	   
	});


	index1 = 21



	$('.category .category-post-comment .image img').each(function() {
		var image = "url(\"images/xmen" + index1 + ".jpg\")";
		index1 ++;
	    $(this).css({'background-image' : image})	   
	});


	index = 10;

	$('.sponsors-image-container  img').each(function() {
		var image = "url(\"images/xmen" + index1 + ".jpg\")";
		index1 ++;
	    $(this).css({'background-image' : image})	   
	});

	$('.latest-post .image img').each(function() {
		var image = "url(\"images/xmen" + index1 + ".jpg\")";
		index1 ++;
	    $(this).css({'background-image' : image})	   
	});







	$('.banner-image-container img').css({'background-image' : "url(\"images/xmen19.jpg\")"});

	$('#slider-image-main').css({'background-image' : "url(\"images/xmen01.jpg\")"});
	

	/*$("#slider-image-main").attr(
			"background-image", "url(\"images/xmen01.jpg\")");*/

/*

	var thumbnailsImageContainer = $('.thumbnails .image-container .image');

	//alert($('.thumbnails .image-container .image img').length) //.image-container image img

	$('.thumbnails .image-container .image img').each(function() {
	    centerImage( $(this), thumbnailsImageContainer);	   
	});

	$('.image.big img').each(function() {
	    centerImage( $(this), $('.image.big'));	   
	});

	$('.category-post-comment .image img').each(function() {
	    centerImage( $(this), $('.category-post-comment .image'));	   
	});
	
		centerImage($('#slider-image-main'), $('.slider-image-main-container'));

	
*/

	

	

	$('body').css({'visibility': 'visible'})
}