window.onload = (event) =>{

   var walls = document.getElementsByClassName("boundary")
var start_btn=document.getElementById("start")

    for (var i = 0; i < walls.length; i++) {
        walls[i].onmouseover = TouchWall
       
    }

function TouchWall() {
    
    for (var i = 0; i < walls.length; i++) {
        walls[i].classList.add("youlose")
        document.getElementById("status").innerHTML="You lost"
    }
    
}
start_btn.onmouseover= ResetWallColor
start_btn.onmouseup=Reset

function ResetWallColor() {
    win = true;
    for (var i = 0; i < walls.length; i++) {
         walls[i].classList.remove("youlose")
         
    } 
     
}

function Reset(){
    win=false
    for (var i = 0; i < walls.length; i++) {
         walls[i].classList.remove("youlose")
       
    }  
    document.getElementById("status").innerHTML='Begin by moving your mouse over the "S".'
    
} 





};