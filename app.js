var gd = document.getElementsByClassName("gridDiv");
var gridDiv = gd[0];
var brushColor = "default";
var clearAllColor = "default";
var paintBrush = "";

//Make Grid
function makeGrid() {
  for (i = 0; i < 700; i++) {
    var boxDivs = document.createElement("div");
    boxDivs.classList.add("box");
    gridDiv.appendChild(boxDivs);
    boxDivs.addEventListener("click", boxColor);
    boxDivs.addEventListener('mousedown', mouseDown);
    boxDivs.addEventListener('mouseup', mosueUp);
    boxDivs.addEventListener('mouseover', mouseOver);
  }
}

function boxColor(event) {
  event.target.style.background = brushColor;
}

function mouseDown() {
  paintBrush = true;
}

function mosueUp() {
  paintBrush = false;
}

function mouseOver(event) {
  if (paintBrush) {
    event.target.style.background = brushColor;
  }
}

makeGrid();

//---------------------STYLE BACKGROUND COLOR---------------------

var liOne = document.getElementsByClassName("palette1");
liOne[0].style.backgroundColor = "#ff0000";
var li1 = liOne[0];
li1.addEventListener("click", brushC);

var liTwo = document.getElementsByClassName("palette2");
liTwo[0].style.backgroundColor = "#0000ff";
var li2 = liTwo[0];
li2.addEventListener("click", brushC);

var liThree = document.getElementsByClassName("palette3");
liThree[0].style.backgroundColor = "#099609";
var li3 = liThree[0];
li3.addEventListener("click", brushC);

var liFour = document.getElementsByClassName("palette4");
liFour[0].style.backgroundColor = "#faa500";
var li4 = liFour[0];
li4.addEventListener("click", brushC); 

var liFive = document.getElementsByClassName("palette5");
liFive[0].style.backgroundColor = "#ffff00";
var li5 = liFive[0];
li5.addEventListener("click", brushC);

var liSix = document.getElementsByClassName("palette6");
liSix[0].style.backgroundColor = "#551a8b";
var li6 = liSix[0];
li6.addEventListener("click", brushC);

var liSeven = document.getElementsByClassName("palette7");
liSeven[0].style.backgroundColor = "#f4a460";
var li7 = liSeven[0];
li7.addEventListener("click", brushC);

var liEight = document.getElementsByClassName("palette8");
liEight[0].style.backgroundColor = "#d3d3d3";
var li8 = liEight[0];
li8.addEventListener("click", brushC);

var liNine = document.getElementsByClassName("palette9");
var li9Color = liNine[0].style.backgroundColor = "#000";
var li9 = liNine[0];
li9.addEventListener("click", brushC);

var liTen = document.getElementsByClassName("palette10");
liTen[0].style.backgroundColor = "#fff";
var li10 = liTen[0];
li10.addEventListener("click", brushC);


//Save the color of the brush
function brushC(event) {
  var backgroundColor = event.target.style.backgroundColor;
  brushColor = backgroundColor;
  var h1 = document.getElementsByTagName("h1");
  h1[0].style.color = backgroundColor;
}

//Clear button
var ca = document.getElementsByClassName("clearAll");
var clearAll = ca[0];
clearAll.addEventListener("click", clear);

function clear() {
  var box = document.getElementsByClassName("box");
  for (i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "#fff";
  }
}
//
// console.log(clearAll);
