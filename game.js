window.onload = (event) =>{
var win = false;
var count =0;
var walls = document.getElementsByClassName("boundary")
var start_btn=document.getElementById("start")
var end_btn=document.getElementById("end")


    for (var i = 0; i < walls.length-1; i++) {
        walls[i].onmouseover = TouchWall
       
    }

function TouchWall() {
    win=false;
    
    for (var i = 0; i < walls.length-1; i++) {
        walls[i].classList.add("youlose")
        document.getElementById("status").innerHTML="You lost"
        
    }
   
}

start_btn.onmouseover= ResetWallColor
start_btn.onmouseup=Reset
end_btn.onmouseover= GameStatus

function ResetWallColor() {
    win = true;
    for (var i = 0; i < walls.length-1; i++) {
         walls[i].classList.remove("youlose")
         
    } 
     
}

function Reset(){
    win=false
    for (var i = 0; i < walls.length-1; i++) {
         walls[i].classList.remove("youlose")
       
    }  
    document.getElementById("status").innerHTML='Begin by moving your mouse over the "S".'
    document.querySelector('.example').innerHTML=0
} 
function GameStatus(){
    if(win){
        document.getElementById("status").innerHTML="You won"
        count+=5
        document.querySelector('.example').innerHTML=count
    }
    else{
    document.getElementById("status").innerHTML="You lost"
    count-=10
    document.querySelector('.example').innerHTML=count
}
}
document.querySelector('.example').innerHTML=count



};