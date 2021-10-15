function makeRequest(event) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText)
      console.log(response)
    }
  };
  var url = "http://localhost:8000/api/v1/titles/"
  xhttp.open("GET", url, true);
  xhttp.send();
  event.preventDefault();
};
