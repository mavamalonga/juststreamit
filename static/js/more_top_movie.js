function more_top_movie(){
  // recovery of container elements
  var div_top_rated = document.getElementsByClassName("top_rated")[0];
  var div_top_movie = document.getElementsByClassName("top_movie")[0];

  // build requete
  var move_id = document.getElementsByClassName("btn_more")[0].getAttribute("id");
  var endpoint = "http://localhost:8000/api/v1/titles/"
  var url = endpoint.concat('', movie_id);

   // delete
  div_top_rated = div_top_rated.removeChild(div_top_movie);

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      });
};