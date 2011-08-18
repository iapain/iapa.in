
/*
nchor Slider by Cedric Dugas   ***
    *** Http://www.position-absolute.com ***
    
    Never have an anchor jumping your content, slide it.

    Don't forget to put an id to your anchor !
    You can use and modify this script for any project you want, but please leave this comment as credit.
    
*****/
        
$(document).ready(function() {

    $("#bubble").everyTime(10, function(){
             $("#bubble").animate({top:"-15px"}, 600).animate({top:"15px"}, 1370);      
          });
    $("a.scroll").anchorAnimate()

});

jQuery.fn.anchorAnimate = function(settings) {

    settings = jQuery.extend({
        speed : 1100
    }, settings);   
    
    return this.each(function(){
        var caller = this
        $(caller).click(function (event) {  
            event.preventDefault()
            var locationHref = window.location.href
            var elementClick = $(caller).attr("href")
            
            var destination = $(elementClick).offset().top;
            $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
                window.location.hash = elementClick
            });
            return false;
        })
    })
}

