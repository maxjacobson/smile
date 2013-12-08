$(document).ready(function() {
  $(window).ready(function() { // makes sure the image is loaded before animating

    var oldWidth = $(window).width(),
      oldHeight = $(window).height(),
      logoWidth = $('.smile').width(),
      logoHeight = $('.smile').height(),
      xInit = ((oldWidth - logoWidth) / 2), // where to move the logo
      yInit = ((oldHeight - logoHeight) / 2),
      newWidth,
      newHeight,
      diff,
      doneResizing;
    $('.smile').transition({
      delay: 500,
      opacity: 1,
      x: xInit,
      y: yInit,
      rotateY: '360deg'
    });
    $(window).resize(function() {
      clearTimeout(doneResizing);
      doneResizing = setTimeout(function() {
        // code here will execute when resizing is done
        newWidth = $(window).width();
        newHeight = $(window).height();
        widthDiff = ((newWidth - oldWidth) / 2);
        heightDiff = ((newHeight - oldHeight) / 2);
        console.log("widthDiff: " + widthDiff);
        console.log("heightDiff: " + heightDiff);
        $('.smile').transition({
          x: '+=' + widthDiff + 'px',
          y: '+=' +  heightDiff + 'px'
        });
        oldWidth = newWidth;
        oldHeight = newHeight;
      }, 100);
    });

    var elementList = document.querySelectorAll("img");
    console.log(elementList);



  });
});
