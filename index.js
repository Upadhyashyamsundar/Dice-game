
var requiredNumberOne=Math.floor(Math.random()*6)+1;
var requiredNumberTwo=Math.floor(Math.random()*6)+1;

setImg1(requiredNumberOne);
setImg2(requiredNumberTwo);

if(requiredNumberOne > requiredNumberTwo){
    document.querySelector(".container h1").innerHTML="🚩 Player1 Wins!";
}
else if(requiredNumberOne < requiredNumberTwo){
  document.querySelector(".container h1").innerHTML="🚩 Player2 Wins";
}
else{
  document.querySelector(".container h1").innerHTML="Its a Draw";
}

function setImg1(m){

      document.querySelector(".dice .img1").src="images/dice"+m+".png";

}
function setImg2(m){

      document.querySelector(".dice .img2").src="images/dice"+m+".png";
}
// alert(requiredNumberOne);
// alert(requiredNumberTwo);
// if(requiredNumberOne > requiredNumberTwo){
//   alert("Player one wins");
// }else if(requiredNumberOne < requiredNumberTwo){
//   alert("Player two wins");
// }else{
//   alert("Its a draw");
// }
