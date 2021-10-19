var url = "http://localhost:8000/api/v1/titles/?imdb_score_min=9.5&imdb_score_max=10"

function get_movie_imdb_score_max(url){
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function select_movie_with_max_votes(movies){
  var max_votes = 0;
  var movie_id = 0;
  for (let i = 0; i < movies.length; i++) {
    if (max_votes < parseInt(movies[i]['votes'])) {
      max_votes = movies[i]['votes'];
      movie_id = parseInt(movies[i]['id']);
    } else {
      continue;
    }
  }
  return movie_id;
};

function get_movie(movie_id){
  var endpoint = "http://localhost:8000/api/v1/titles/"
  var url = endpoint.concat('', movie_id);
  var div_top_movie = document.getElementsByClassName('top_movie')[0];
  var poster = div_top_movie.getElementsByClassName("poster")[0];
  var title = div_top_movie.getElementsByClassName("title")[0];
  var description = div_top_movie.getElementsByClassName("description")[0];
  var button = div_top_movie.getElementsByClassName("more_top_movie")[0];
  fetch(url)
    .then(response => response.json())
    .then(data => {
      poster.setAttribute("src", data['image_url']);
      title.innerHTML = data['title'];
      description.innerHTML = data['description'];
      button.setAttribute("id", `${movie_id}`);
      div_top_movie.appendChild(poster);
      div_top_movie.appendChild(title);
      div_top_movie.appendChild(description);
      div_top_movie.appendChild(button);
    });
};

get_movie_imdb_score_max(url).then(function(result) {
  movie_id = select_movie_with_max_votes(result['results']);
  get_movie(movie_id);

});
