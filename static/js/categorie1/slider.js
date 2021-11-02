var left = 1;
var right = 4;

function moveLeft1(){
  var child = document.getElementsByClassName("child")[0];
  var items = child.children;
  item = items[6];
  items[6].remove();
  child.insertBefore(item, child.firstChild);
}

function moveRight1(){
  var child = document.getElementsByClassName("child")[0];
  var items = child.children;
  item = items[0];
  items[0].remove();
  child.insertBefore(item, child[-1]);

}