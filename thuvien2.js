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

        $("div#find").fadeToggle(1000,function(){
            $("div#find").change(function(){
                $("div#find").fadeOut()
                $("div#find input:text").val("")
            })
        })
    })
    $("div.introItem").hide();
    $("ul.introContent li ").click(function(){
        $("ul.introContent li ").removeClass("active")
        $(this).addClass("active")
        let id_tab=$(this).children("a").attr("href")
        $("div.introItem").hide();
        $(id_tab).fadeIn("slow")
        $("html,body").animate({scrollTop:0});
    })
    $("div.close").click(function(){
        $("div.introItem").slideUp("slow")
    })
    $("ul.mainMenu >li >a").click(function(){
        let id=$(this).attr("href")
        $("html,body").animate({scrollTop:$(id).prop("offsetTop")+"px"},2000);
    })
    let img= $(".tacGia img")
            img.fadeOut()
            $(window).scroll(function(){
                if($(this).scrollTop()>$("#tacPham").prop("offsetTop")-200){
                    for(let i=0;i<img.length;i++)
                        {
                            let c=(i)*1000
                            $(".tacGia img").eq(i).fadeIn(c)
                        }
                }
                else{
                    $(".tacGia img").hide()
                }
                
    })
    var count=0
    $("div.buttonFooter").click(function(){
        count++
        if((count%2)!=0)
        {
            $("div.buttonFooter i").removeClass()
            $("div.buttonFooter i").addClass("fa-solid fa-angles-up")
        }
        if((count%2)==0)
        {
            $("div.buttonFooter i").removeClass()
            $("div.buttonFooter i").addClass("fa-solid fa-angles-down")
        }
        $("footer").slideToggle(2000)
    })
})
