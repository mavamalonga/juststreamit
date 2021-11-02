function moveLeft4(){
  const child2 = document.getElementsByClassName("child4")[0];
  var items2 = child2.children;
  item2 = items2[6];
  items2[6].remove();
  child2.insertBefore(item2, child2.firstChild);
}

function moveRight4(){
  var child2 = document.getElementsByClassName("child4")[0];
  var items2 = child2.children;
  item2 = items2[0];
  items2[0].remove();
  child2.insertBefore(item2, child2[-1]);
}