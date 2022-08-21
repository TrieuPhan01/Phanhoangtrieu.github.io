
//
var chuyen = 0;
function Next(){
    
    if(chuyen === 100){
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
        chuyen = 100;
    }
    else{
        chuyen-=100;

    }
    document.getElementById("chuyenslide").style.marginLeft = '-' + chuyen+'%';
    
}   



function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();



  //JQuery
