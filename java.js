$(window).scroll(function(){
    var distanceFromTop = $(document).scrollTop();
    if(distanceFromTop < 150 )
    {
        // reduce div height to 250px
        $('.navibar').css('height', '150' - $(document).scrollTop() + 'px');
    }
    else
    {
        // set minimum div height to 100px
        $('.navibar').css('height', '50px');
    }
});
