var steps = $(".step");
var slides = $(".slide");

var r = 4000;
var currentSlide = -1;
steps.each(function(index){
    
    if($(this).hasClass("slide")){
	currentSlide += 1;
    }
    
    var theta = currentSlide  / (slides.length) * 2 * Math.PI - Math.PI / 2;
    var x = r * Math.cos(theta);
    var y = r * Math.sin(theta);
    
    $(this).attr({"data-x": Math.round(x).toString(), "data-y": Math.round(y).toString()});	
});

$("#overview").attr({"data-x": "0", "data-y": "0", "data-scale": "10"});

impress().init();
