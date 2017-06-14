
$(function(){
    $('.prev-slide').on('click', function(){
        $('#slideshow').carousel('prev');
    });
    $('.next-slide').on('click', function(){
        $('#slideshow').carousel('next');
    });
    
 //按键控制
    $(document).on('keydown', function(e){
        console.log(e.which);
        switch(e.which) {
            case 37:
                $('#slideshow').carousel('prev');
                break;
            case 39:
                $('#slideshow').carousel('next');
                break;
        }
    });
    
//播放与暂停键的切换
    
    var play = false;
    $('.play-and-stop').click(
        function(){
         if(!play){
                $('#slideshow').carousel('cycle');
          $(this).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause'); 
            }
            else{
            $('#slidehow').carousel('pause');
         $(this).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');   
            }
         play = !play;
        }
    );
      
});