/*
-------- CREATING VARIABLES -----------
*/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<h2 id="caption"></h2>');
var $leftArrow = $('<a id="leftArrow" href="#"><p>< prev </p></a>');
var $rightArrow = $('<a id="rightArrow" href="#"><p> next ></p></a>');
var $exit = $('<a id="close" href="#"><p>X  close</p></a>');
// keeps track of img index for prev/next so we can use a list index
var $index = 0;
// keeps track of total number of photos in the list in case we add/subtract some later
var $galleryLength = $("#imageGallery li").length;


/*
-------- CREATING THE OVERLAY ON PAGE -----------
*/
// Add close button to overlay.
$overlay.append($exit);

// Add caption to overlay.
$overlay.append($caption);



// Add arrows to overlay.
$overlay.append($leftArrow);
$overlay.append($rightArrow);

// Add image to overlay.
$overlay.append($image);


// Add an overlay:
$("body").append($overlay);


/*
-------- UPDATE THE OVERLAY -----------
*/
  // Update overlay in a function:
var updateImage = function(imageLocation, imageCaption){
  // Adding the image linked in the link.
  $image.attr("src", imageLocation);
  //Adding words between the <p> tags:
  $caption.text(imageCaption);
}


/*
-------- CLICK EVENT TO LAUNCH OVERLAY -----------
*/
  // Set up a click event to trigger when clicking on an image...
$("#imageGallery a").click(function(event){
  event.preventDefault();
    // Get the href attribute of the image clicked (to use as image in overlay).
  var imageLocation = $(this).attr("href");
   // Get child's alt attribute (to use as caption text).
  var imageCaption = $(this).children("img").attr("alt");

  // Update list index to currently selected image
    // Translation: Find out what number on the list this image is
    // by checking the parent element ( <li> element) of the <a> element I selected
    // and storing its index as the current index.
  $index = $(this).parent().index();

  // Call the new function from above:
    // This updates the overlay with the appropriate img and caption.
  updateImage(imageLocation, imageCaption);

  // Show the overlay

  $overlay.slideDown(imageLocation);

});



/*
-------- MAKING THE THE ARROWS WORK -----------
*/

// Button prev next function:
var prevNext = function(prev) {
  //set prev to true; this moves backwards in the index

  //if flag set move backwards, if not move forwards
  if(!prev) { $index++;
  } else { $index--; }

  //if out of index reset
  if($index < 0) { $index = $galleryLength-1; }
  if($index > $galleryLength-1){ $index = 0; }

//Grab the element by index and then get the link
var newImgSelected = $("#imageGallery li").get($index).getElementsByTagName("a");

 //grab link information
 var imageLocation = $(newImgSelected).attr("href");
var imageCaption = $(newImgSelected).children("img").attr("alt");

//Update overlay
updateImage(imageLocation, imageCaption);

}

/*
-------- CLICK EVENT FOR ARROWS -----------
*/
//When left arrow button link is clicked
  //show the previous photo
$("#leftArrow").click(function(){
  prevNext(true);
});
//When left arrow key is pressed on keyboard
  //show the previous photo
$(document).keyup(function(e){
  if (e.keyCode == 37) {
    prevNext(true);
  }
});

//When right arrow button link is clicked
  //show the next photo
$("#rightArrow").click(function(){
  prevNext();
});
//When right arrow key is pressed on keyboard
  //show the next photo
$(document).keyup(function(e){
  if (e.keyCode == 39) {
    prevNext();
  }
});


/*
-------- HIDE OVERLAY WHEN CLICKED -----------
*/
//  When overlay is clicked:
/*
$overlay.click(function(event){
  // Hide the overlay.
  if(event.target.id == "overlay") {
    $(this).slideUp("fast");
  }
});
*/

$exit.click(function() {
  $overlay.slideUp("slow");
});

//When esc key is pressed
  //hide overlay
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    $overlay.slideUp("slow");
  };

});

//When the displayed overlay image is clicked
  //hide overlay
$image.click(function() {
  $overlay.slideUp("slow");
});

/* Making the Form work */
