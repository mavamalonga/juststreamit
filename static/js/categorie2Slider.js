const container2 = document.querySelector(".thumbnail-container2");
const allBox2 = container2.children;
const containerWidth2 = container2.offsetWidth; // la sum de la taille en pixels de tout les items
const margin2 = 30;
var items2 = 0;
var totalItems2 = 0;
var jumpSlideWidth2 = 0;
var lastDirection2 = -1;


// item setup per slide

responsive2 = [
  {breakPoint: {width:0, item:1}}, //if with greater than 0 (1 will item show)
  {breakPoint: {width:600, item:2}}, //if width greater than 600 (2 will item show)
  {breakPoint: {width:1000, item:4}} //if width greater than 1000 (4 will item show)
]

// load selectionne le nb items a afficher en fonction de la taille de l'écran

function load2(){
  for(i=0; i<responsive2.length; i++){
    console.log(responsive)
    console.log(items)

    if(window.innerWidth>responsive2[i].breakPoint.width){
      items2=responsive2[i].breakPoint.item
    }
  }
  start2();
}

function start2(){
  var totalItemsWidth2 = 0;
  for(let i=0; i<allBox2.length; i++){
    // width and margin setup of items
    if (allBox2[i].getAttribute('class') == 'item'){
      allBox2[i].style.width = (containerWidth2/items2) - margin2 +  "px";
      allBox2[i].style.margin = (margin2/2) + "px";
      totalItemsWidth2 += containerWidth2/items2;
      totalItems2++;
    }
  }

  // thumbnail-container width set up
  container2.style.width = totalItemsWidth2 + "px";

  // sliders controls number set up
  const allSlides2 = Math.ceil(totalItems2/items2);
}


function moveRight2(ele){

  var itemWidth2 = 290; 
  if (items2 == 4 && lastDirection2 == -1){
    var numb2 = ele.id;
      jumpSlideWidth2 = jumpSlideWidth2 + (containerWidth2*numb2);
    container2.style.marginLeft =- jumpSlideWidth2 + itemWidth2 + margin2 + "px";

    lastDirection2 = 1;
  }
}

function moveLeft2(ele){

  if(items2 == 4 && lastDirection2 == 1){
    var numb2=ele.id;
      jumpSlideWidth2 = jumpSlideWidth2 + (containerWidth2*numb2);
    container2.style.marginLeft =- jumpSlideWidth2 + "px";

    lastDirection2 = -1;
  }
}

load2();

//window.onload = load();