function more_top_movie(){
  var movie_id = document.getElementsByClassName("more_top_movie")[0].getAttribute("id");
  var endpoint = "http://localhost:8000/api/v1/titles/"
  var url = endpoint.concat('', movie_id);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
         });
};