const container3 = document.querySelector(".thumbnail-container3");
const allBox3 = container3.children;
const containerWidth3 = container3.offsetWidth; // la sum de la taille en pixels de tout les items
const margin3 = 30;
var items3 = 0;
var totalItems3 = 0;
var jumpSlideWidth3 = 0;
var lastDirection3 = -1;
// item setup per slide

responsive3 = [
  {breakPoint: {width:0, item:1}}, //if with greater than 0 (1 will item show)
  {breakPoint: {width:600, item:2}}, //if width greater than 600 (2 will item show)
  {breakPoint: {width:1000, item:4}} //if width greater than 1000 (4 will item show)
]

// load selectionne le nb items a afficher en fonction de la taille de l'écran

function load3(){
  for(i=0; i<responsive3.length; i++){
    if(window.innerWidth>responsive3[i].breakPoint.width){
      items3=responsive3[i].breakPoint.item
    }
  }
  start3();
}

function start3(){
  var totalItemsWidth3 = 0;
  for(let i=0; i<allBox3.length; i++){
    // width and margin setup of items
    if (allBox3[i].getAttribute('class') == 'item'){
      allBox3[i].style.width = (containerWidth3/items3) - margin3 +  "px";
      allBox3[i].style.margin = (margin3/2) + "px";
      totalItemsWidth3 += containerWidth3/items3;
      totalItems3++;
    }
  }

  // thumbnail-container width set up
  container3.style.width = totalItemsWidth3 + "px";

  // sliders controls number set up
  const allSlides3 = Math.ceil(totalItems3/items3);
}


function moveRight3(ele){

  var itemWidth3 = 290; 
  if (items3 == 4 && lastDirection3 == -1){
    var numb3 = ele.id;
      jumpSlideWidth3 = jumpSlideWidth3 + (containerWidth3*numb3);
    container3.style.marginLeft =- jumpSlideWidth3 + itemWidth3 + margin3 + "px";

    lastDirection3 = 1;
  }
}

function moveLeft3(ele){

  if(items3 == 4 && lastDirection3 == 1){
    var numb3=ele.id;
      jumpSlideWidth3 = jumpSlideWidth3 + (containerWidth3*numb3);
    container3.style.marginLeft =- jumpSlideWidth3 + "px";

    lastDirection3 = -1;
  }
}

load3();

//window.onload = load();