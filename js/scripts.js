$(function() {
    
    var carouselList = $("#carousel ul"),
        moveFirstSlide = function(){
            var firstItem = carouselList.find("li:first"),
                lastItem = carouselList.find("li:last");
            lastItem.after(firstItem);
            carouselList.css({marginLeft: 0});
        };
    
    var changeSlide = function(){
        carouselList.animate({'marginLeft':-400}, 1000, moveFirstSlide);
    };
    
    setInterval(changeSlide, 3000);
});