function openModal(){
  // Get the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal(){
  // Get the <span> element that closes the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
