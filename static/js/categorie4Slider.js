const container4 = document.querySelector(".thumbnail-container4");
const allBox4 = container4.children;
const containerWidth4 = container4.offsetWidth; // la sum de la taille en pixels de tout les items
const margin4 = 30;
var items4 = 0;
var totalItems4 = 0;
var jumpSlideWidth4 = 0;
var lastDirection4 = -1;
// item setup per slide

responsive4 = [
  {breakPoint: {width:0, item:1}}, //if with greater than 0 (1 will item show)
  {breakPoint: {width:600, item:2}}, //if width greater than 600 (2 will item show)
  {breakPoint: {width:1000, item:4}} //if width greater than 1000 (4 will item show)
]

// load selectionne le nb items a afficher en fonction de la taille de l'écran

function load4(){
  for(i=0; i<responsive4.length; i++){
    if(window.innerWidth>responsive4[i].breakPoint.width){
      items4=responsive4[i].breakPoint.item
    }
  }
  start4();
}

function start4(){
  var totalItemsWidth4 = 0;
  for(let i=0; i<allBox4.length; i++){
    // width and margin setup of items
    if (allBox4[i].getAttribute('class') == 'item'){
      allBox4[i].style.width = (containerWidth4/items4) - margin4 +  "px";
      allBox4[i].style.margin = (margin4/2) + "px";
      totalItemsWidth4 += containerWidth4/items4;
      totalItems4++;
    }
  }

  // thumbnail-container width set up
  container4.style.width = totalItemsWidth4 + "px";

  // sliders controls number set up
  const allSlides4 = Math.ceil(totalItems4/items4);
}


function moveRight4(ele){

  var itemWidth4 = 290; 
  if (items4 == 4 && lastDirection4 == -1){
    var numb4 = ele.id;
      jumpSlideWidth4 = jumpSlideWidth4 + (containerWidth3*numb4);
    container4.style.marginLeft =- jumpSlideWidth4 + itemWidth4 + margin4 + "px";

    lastDirection4 = 1;
  }
}

function moveLeft4(ele){

  if(items4 == 4 && lastDirection4 == 1){
    var numb4=ele.id;
      jumpSlideWidth4 = jumpSlideWidth4 + (containerWidth4*numb4);
    container4.style.marginLeft =- jumpSlideWidth4 + "px";

    lastDirection4 = -1;
  }
}

load4();

//window.onload = load();