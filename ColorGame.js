var numSquare=6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorD = document.getElementById("colorD");
var messageD=document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
   easy.classList.add("selected");
   hard.classList.remove("selected");
   numSquare=3;
   colors=generateRandomColors(numSquare);
   pickedColor=pickColor();
   colorD.textContent=pickedColor;
   for(var i=0;i<squares.length;i++){
     if(colors[i]){
       squares[i].style.background = colors[i];
     }
     else{
       squares[i].style.display="none";
     }
   }
})

hard.addEventListener("click",function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquare=6;
  colors=generateRandomColors(numSquare);
  pickedColor=pickColor();
  colorD.textContent=pickedColor;
  for(var i=0;i<squares.length;i++){
      squares[i].style.background = colors[i];
      squares[i].style.display="block";
  }
})


colorD.textContent = pickedColor;

resetbutton.addEventListener("click",function(){
  //generate new colors
  colors = generateRandomColors(numSquare);
  //pick anew rand color
  pickedColor = pickColor();
  //color displ
  colorD.textContent=pickedColor;
  messageD.textContent = "";
  //change color of sqaure
  for(var i=0;i<squares.length;i++){
    //add initial colors
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor="steelblue";
  resetbutton.textContent="New Colors";
})

for(var i=0;i<squares.length;i++){
  //add initial colors
  squares[i].style.backgroundColor=colors[i];

  //add click listerners
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //comparing pickedc w correctc
    if(clickedColor ===pickedColor){
      messageD.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetbutton.textContent="Play Again?";
    }
    else{
      this.style.backgroundColor = "#232323";
      messageD.textContent = "try again :(";
    }
  });
}

function changeColors(color){
  //loop through all squares to match the given colorD
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = color;
  }
}
function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return colors[random];
}
function generateRandomColors(num){
  //make array
  var arr = [];
  //add num random colors
  for(var i=0;i<num;i++){
    //get random colour and push in array
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
  //pick r,g,b from 0-255
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" +r+ ", " +g+ ", "+b+")";
}
