var left = 1;
var right = 4;

function moveLeft1(){
  const parent = document.getElementsByClassName("parent")[0];
  var child = parent.getElementsByClassName("child")[0];
  var items = child.children;
  console.log(items)
  item = items[6];
  items[6].remove();
  child.insertBefore(item, child.firstChild);
}

function moveRight1(){
  const parent = document.getElementsByClassName("parent")[0];
  const child = parent.getElementsByClassName("child")[0];
  const items = child.children;
  item = items[0];
  items[0].remove();
  child.insertBefore(item, child[-1]);
}