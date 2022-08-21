var chuyen = 0;
function Next(){
    
    if(chuyen === 300){
        chuyen = 0;
    }
    else{
        chuyen+=100;
    }
    document.getElementById("chuyenslide").style.marginLeft = '-'+chuyen+'%';
    
   
}

setInterval(Next,3000)

function Val(){
    if(chuyen === 0){
        chuyen = 300;
    }
    else{
        chuyen-=100;

    }
    document.getElementById("chuyenslide").style.marginLeft = '-' + chuyen+'%';
    
}


//JQuery

$(document).ready(function(){
    $("#gototop").hide()
    $(".icon-bar").hide()

    $(window).scroll(function () {

        

        if($(this).scrollTop() >= 100)
       {
        $(".icon-bar").show("slow")
       }
       else{
        $(".icon-bar").hide("slow")
       }




       if($(this).scrollTop() >= 230) {
            $(".menus").css({
                "position": "fixed",
                "left" : 0,
                "right" : 0,
                "top" : 0,
                "z-index" : 999,
            })
        }
        else{
            $(".menus").css({
                "position": "relative",
            })
        }



       if($(this).scrollTop() >= 100)
       {
        $("#gototop").show("slow")
       }
       else{
        $("#gototop").hide("slow")
       }
       
    })

    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500)
    })
})