//JS
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




//JQUERY
$(document).ready(function () {
    let click1 = 0;
    let click2 = 0;
    let click3 = 0;
    let click4 = 0;
    let click5 = 0;
    let click6 = 0;
    let click7 = 0;
    $("#s-title-1").click(function () {
        $("#s-content-1").slideDown("slow");
        click1++;
        if (click1 == 2) {
            $("#s-content-1").slideUp("slow");
            click1 = 0;
        }
    });

    $("#s-title-2").click(function () {
        $("#s-content-2").slideDown("slow");
        click2++;
        if (click2 == 2) {
            $("#s-content-2").slideUp("slow");
            click2 = 0;
        }
    });

    $("#s-title-3").click(function () {
        $("#s-content-3").slideDown("slow");
        click3++;
        if (click3 == 2) {
            $("#s-content-3").slideUp("slow");
            click3 = 0;
        }
    });

    $("#s-title-4").click(function () {
        $("#s-content-4").slideDown("slow");
        click4++;
        if (click4 == 2) {
            $("#s-content-4").slideUp("slow");
            click4 = 0;
        }
    });

    $("#s-title-5").click(function () {
        $("#s-content-5").slideDown("slow");
        click5++;
        if (click5 == 2) {
            $("#s-content-5").slideUp("slow");
            click5 = 0;
        }
    });

    $("#s-title-6").click(function () {
        $("#s-content-6").slideDown("slow");
        click6++;
        if (click6 == 2) {
            $("#s-content-6").slideUp("slow");
            click6 = 0;
        }
    });
    
    $("#s-title-7").click(function () {
        $("#s-content-7").slideDown("slow");
        click7++;
        if (click7 == 2) {
            $("#s-content-7").slideUp("slow");
            click7 = 0;
        }
    });
});






$(document).ready(function(){
    $("#gototop").hide()
    

    $(window).scroll(function () {



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