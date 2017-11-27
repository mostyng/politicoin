$(document).ready(function(){

let lazy = lazyload();
    $("img.lazyload").lazyload();
});

// var $cog = $('.cog'),
//     $body = $(document.body),
//     bodyHeight = $body.height();

// $(window).scroll(function () {
//     $cog.css({
//         'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
//     });

$(window).scroll(function() {
var theta = $(window).scrollTop() / 100 % Math.PI;
$('#cog').css({ transform: 'rotate(' + theta + 'rad)' });
});
