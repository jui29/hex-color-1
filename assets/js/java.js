const bgCode = ["blue", "green" ,"rgba(133,122,200)" , "#EE84E9"];
const btn = document.getElementById("btn");
const code =document.querySelector('.code');

btn.addEventListener ('click', function (){
  const randomNum = getChangeNumber () ;
  document.body.style.backgroundColor = bgCode [randomNum] ;
  code.textContent = bgCode [randomNum]  

});


function getChangeNumber () {
  return Math.floor(Math.random()*bgCode.length);
}


