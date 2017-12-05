$(document).ready(function(){

	$(".coinhive-cover").on("click", function(){
    $(this).hide();
    $("#after").show();
    $("#burst").show();
	  $(".intro").hide();
	});



  $(".voter").on("click", function(){
    $(".voteCover").show();
  });

$(window).scroll(function() {
var theta = $(window).scrollTop() / 500 % Math.PI;
$('#cog').css({ transform: 'rotate(' + theta + 'rad)' });
});
});

var $img = $('#burst');
// setInterval(function(){
//     $('#after').toggle(function(){
//         $img.show();
//         setTimeout(function() {
//             $img.attr('src', 'http://i.imgur.com/JfkmXjG.gif');
//         }, 0);
//     }, function(){
//         $img.hide();
//     });
// }, 10000);

setInterval(function(){
  $("#coin_gif").toggle();
  setTimeout(function() {
      $("#coin_gif").attr('src', 'images/coin_burst_lg.gif');
  }, 0);
}, 5000);

// setInterval(function(){
//   $("#coin_gif").hide();
// }, 10000);



jQuery(window).scroll(function(){
    var fromTopPx = 900; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('body').addClass('members');
      }else{
        jQuery('body').removeClass('members');
      }



    // }else{
    //     jQuery('body').removeClass('members');
    // }
});
//
// var document.getElementById('after')
// var text = ["Welcome", "Hi", "Sup dude"];
// var counter = 0;
// var elem = document.getElementById("changeText");
// setInterval(change, 1000);
//
// function change() {
//   elem.innerHTML = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//   }
// }
