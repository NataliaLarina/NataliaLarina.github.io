$(document).ready(function(evt) {
  console.log("Animations go!");

$('#move-img').click(function(evt) {
    // $('img').animate({
    //   opacity: 0.8,
    //   width: '50%',
    //   borderWidth: '5px'
    // }, 1000, function() {
    //   console.log('Mario has been moved');
    //
    // });
    $('img').animate({
      opacity: 0.8,
      width: '10%',
      borderWidth: '5px',
      top: '+=300px',
      left: '+=250px'
    }, 1000, function() {


    });
    $('img').animate({
      opacity: 0.8,
      width: '10%',
      borderWidth: '5px',
      top: '-=300px',
      left: '-=250px'
    }, 1000, function() {
      
    });
    });
  });
