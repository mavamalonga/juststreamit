const categorie2 = document.getElementsByClassName("categorie2")[0];
const categorie2Contains = categorie2.getElementsByClassName("categorie2-container")[0];
const categorie2AllItems = categorie2Contains.getElementsByClassName("item");
var categorie2LastDirection = -1;


// item setup per slide

responsive = [
  {breakPoint: {width:0, item:1}}, //if with greater than 0 (1 will item show)
  {breakPoint: {width:600, item:2}}, //if width greater than 600 (2 will item show)
  {breakPoint: {width:1000, item:4}} //if width greater than 1000 (4 will item show)
]

// load selectionne le nb items a afficher en fonction de la taille de l'écran

function categorie2Load(){
  for(i=0; i<responsive.length; i++){
    if(window.innerWidth>responsive[i].breakPoint.width){
      items=responsive[i].breakPoint.item
    }
  }
  categorie2Start();
}

function categorie2Start(){
  var totalItemsWidth = 0;
  for(let i=0; i<categorie2AllItems.length; i++){
    // width and margin setup of items
    categorie2AllItems[i].style.width = (containerWidth/items) - margin +  "px";
    categorie2AllItems[i].style.margin = (margin/2) + "px";
    totalItemsWidth += containerWidth/items;
    totalItems++;
  }

  // thumbnail-container width set up
  categorie2Contains.style.width = totalItemsWidth + "px";

  // sliders controls number set up
  const allSlides = Math.ceil(totalItems/items);
}


function categorie2MoveRight(ele){
  var itemWidth = 290; 
  if (items == 4 && categorie2LastDirection == -1){
    console.log("Right Ok");
    var numb = ele.id;
      jumpSlideWidth = jumpSlideWidth + (containerWidth*numb);
    categorie2Contains.style.marginLeft =- jumpSlideWidth + itemWidth + margin + "px";

    categorie2LastDirection = 1;
  }
}

function categorie2MoveLeft(ele){
  if(items == 4 && categorie2LastDirection == 1){
    var numb=ele.id;
      jumpSlideWidth = jumpSlideWidth + (containerWidth*numb);
    categorie2Contains.style.marginLeft =- jumpSlideWidth + "px";

    categorie2LastDirection = -1;
  }
}

categorie2Load();

//window.onload = load();