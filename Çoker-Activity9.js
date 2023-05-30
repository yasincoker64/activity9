$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
	  var swappedImage = new Image();
	  swappedImage.src = $(this).attr("href");
	});
  
	// set up event handler for links
	$("#image_list a").click(function(evt) {
	  evt.preventDefault();
  
	  // Get the new image URL and caption
	  var imageURL = $(this).attr("href");
	  var caption = $(this).attr("title");
  
	  // Fade out caption and image
	  $("#caption, #image").fadeOut(500, function() {
		// Callback function after fade out completes
		// Update image source and caption
		$("#image").attr("src", imageURL);
		$("#caption").text(caption);
  
		// Fade in caption and image
		$("#caption, #image").fadeIn(1000);
	  });
	});
  
	// move focus to first thumbnail
	$("li:first-child a").focus();
  });
  