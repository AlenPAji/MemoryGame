var level=0;
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var started=false;
var x;
$(document).on("keypress",function(){
  if(!started){
    started=true;
 nextSequence();
}
})
$(".btn1").click(function(){
  if(!started){
  // $("#maindiv").addClass("view");
  // $("#green").css
  //  started=true;
    //nextSequence();
    started=true;
    x=$("#maindiv").detach();
    nextSequence();
  }
})

$(".btn").click(function(event){

  if(started){
  var userChosenColour=event.target.id;
userClickedPattern.push(userChosenColour);
//console.log(userClickedPattern);
playSound(userChosenColour);
animatePress(userChosenColour);
var d=userClickedPattern.length-1;
checkPattern(d);
console.log(userClickedPattern);
}
});
function nextSequence(){
  userClickedPattern=[];
  $("#level-title").text("your current level is "+level);
  level=level+1;
  var n=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColors[n];
  gamePattern.push(randomChosenColour);
var idofbtn='#'+randomChosenColour;
$(idofbtn).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor){
  var btnpr='#'+currentColor;
  $(btnpr).addClass("pressed");
  setTimeout(function() {$(btnpr).removeClass("pressed")}, 100);
}
function checkPattern(q){
if(userClickedPattern[q]===gamePattern[q]){
  if(userClickedPattern.length===gamePattern.length){
    nextSequence();
  }
}else{
  $("h1").text("Wrong answer ,Press any key to start over");
  $("body").addClass("game-over");
    setTimeout(function() {$("body").removeClass("game-over")}, 200);
  startover();
}
}
function startover(){
  gamePattern=[];
  userClickedPattern=[];
  level=0;
$(".container").prepend(x);
  started=false;
}
