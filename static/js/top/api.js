const urlTopMovie = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

function requestTopMovie(urlTopMovie){
  return fetch(urlTopMovie).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function sortMovie(movies){
  var maxVotes = 0;
  var movieId = 0;
  for (let i = 0; i < movies.length; i++) {
    if (maxVotes < parseInt(movies[i]['votes'])) {
      maxVotes = movies[i]['votes'];
      movieId = parseInt(movies[i]['id']);
    } else {
      continue;
    }
  }
  return movieId;
};


function extractDataTopMovie(movieId){

  // get elements html
  const endpoint = "http://localhost:8000/api/v1/titles/"
  const urlTopMovie = endpoint.concat('', movieId);

  // elments html
  const parent = document.getElementsByClassName('top-movie-parent')[0];
  const item = parent.children[0];


  // caracteres
  const img = item.getElementsByTagName('img')[0];
  var title = item.getElementsByClassName("title")[0];
  var description = item.getElementsByClassName("description")[0];
  var button = item.getElementsByClassName("btn-more")[0];

  // get data from api
  fetch(urlTopMovie)
    .then(response => response.json())
    .then(data => {
      // insert data in html elements
      img.src = data['image_url'];
      title.innerHTML = data['title'];
      description.innerHTML = `${data['description']}`;
      button.setAttribute("id", `${movieId}`);
      });
};


function MainTopMovie(){
  requestTopMovie(urlTopMovie).then(function(result) {
      movieId = sortMovie(result['results']);
      extractDataTopMovie(movieId);
    });
}

MainTopMovie();