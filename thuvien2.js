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
    $("div.introItem").hide();
    $("ul.introContent li ").click(function(){
        $("ul.introContent li ").removeClass("active")
        $(this).addClass("active")
        let id_tab=$(this).children("a").attr("href")
        $("div.introItem").hide();
        $(id_tab).slideDown("slow")
        $("html,body").animate({scrollTop:0});
    })
    $("div.close").click(function(){
        $("div.introItem").slideUp("slow")
    })
})
