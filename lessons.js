
var i = 0;
var a = true;
var txt = ''; //the typing text
var speed = 80;

function typeWriter() {

  //clear the html initially for a text
  if (i === 0)
    document.getElementById("button1").innerHTML = '';

  if (i < txt.length) {

    document.getElementById("button1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


var quotes = [
    "create games.", 
    "make a site.", 
    "build an app.",
    "create AI.",
    "solve a problem.",
    "explore math."
]


function getRandomInt(max) {
    console.log(Math.floor(Math.random() * max))
    return Math.floor(Math.random() * max);
  }

function newQuote() {
  //set the typing text
  txt = quotes[getRandomInt(6)];
  
  //reset the index
  i = 0;
  typeWriter();
  setTimeout(newQuote, 3000);
}

newQuote();



