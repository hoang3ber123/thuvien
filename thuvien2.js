$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $("div#backtop").fadeIn();
        }
        else{
            $("div#backtop").fadeOut();
        }
    })
    $("div#backtop").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })
    $("li.find >a").click(function(){

        $("div#find").toggle(1000)
    })

})