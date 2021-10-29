const controls = document.querySelector(".controls");
const container = document.querySelector(".thumbnail-container");
const allBox = container.children;
const containerWidth = container.offsetWidth; // la sum de la taille en pixels de tout les items
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;
var lastDirection = -1;


// item setup per slide

responsive = [
  {breakPoint: {width:0, item:1}}, //if with greater than 0 (1 will item show)
  {breakPoint: {width:600, item:2}}, //if width greater than 600 (2 will item show)
  {breakPoint: {width:1000, item:4}} //if width greater than 1000 (4 will item show)
]

// load selectionne le nb items a afficher en fonction de la taille de l'écran

function load(){
  for(i=0; i<responsive.length; i++){
    if(window.innerWidth>responsive[i].breakPoint.width){
      items=responsive[i].breakPoint.item
    }
  }
  start();
}

function start(){
  var totalItemsWidth = 0;
  for(let i=0; i<allBox.length; i++){
    // width and margin setup of items
    console.log(allBox[i].getAttribute('class'))
    if (allBox[i].getAttribute('class') == 'item'){
      allBox[i].style.width = (containerWidth/items) - margin +  "px";
      allBox[i].style.margin = (margin/2) + "px";
      totalItemsWidth += containerWidth/items;
      totalItems++;
    }
  }

  // thumbnail-container width set up
  container.style.width = totalItemsWidth + "px";

  // sliders controls number set up
  const allSlides = Math.ceil(totalItems/items);
}


function moveRight(ele){

  var itemWidth = 290; 
  if (items == 4 && lastDirection == -1){
    var numb = ele.id;
      jumpSlideWidth = jumpSlideWidth + (containerWidth*numb);
    container.style.marginLeft =- jumpSlideWidth + itemWidth + margin + "px";

    lastDirection = 1;
  }
}

function moveLeft(ele){

  if(items == 4 && lastDirection == 1){
    var numb=ele.id;
      jumpSlideWidth = jumpSlideWidth + (containerWidth*numb);
    container.style.marginLeft =- jumpSlideWidth + "px";

    lastDirection = -1;
  }
}

load();

//window.onload = load();