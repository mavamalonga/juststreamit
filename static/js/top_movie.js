var url = "http://localhost:8000/api/v1/titles/?imdb_score_min=9.5&imdb_score_max=10"

function select_movie_imdb_max(url){
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function choice_best_movie(movies){
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

function create_top_movie_section(){
  // get node 
  var div_top_rated = document.getElementsByClassName("top_rated")[0];
  console.log(div_top_rated)

  // div top movie
  var div_top_movie = document.createElement('div');
  var attr_class = document.createAttribute('class');
  attr_class.value = "top_movie";
  div_top_movie.setAttributeNode(attr_class);

  // poster
  var img = document.createElement('img');
  var attr_class = document.createAttribute("class");
  attr_class.value = "poster";
  img.setAttributeNode(attr_class);
  div_top_movie.appendChild(img);

  // title
  var title = document.createElement('h1');
  var attr_class = document.createAttribute('class');
  attr_class.value = "title";
  title.setAttributeNode(attr_class);
  div_top_movie.appendChild(title);

  // description
  var description = document.createElement("p");
  var attr_class = document.createAttribute("class");
  attr_class.value = "description";
  description.setAttributeNode(attr_class);
  div_top_movie.appendChild(description);

  // button : more
  var button = document.createElement("input");
  var attr_type = document.createAttribute("type");
  attr_type.value = "button"
  var attr_class = document.createAttribute("class");
  attr_class.value = "btn_more";
  var attr_onclick = document.createAttribute("onclick");
  attr_onclick.value = "more_top_movie()";
  var attr_value = document.createAttribute("value");
  attr_value.value = "More";
  button.setAttributeNode(attr_type);
  button.setAttributeNode(attr_class);
  button.setAttributeNode(attr_onclick);
  button.setAttributeNode(attr_value);
  div_top_movie.appendChild(button);

  // insert elemnets
  div_top_rated.insertBefore(div_top_movie, div_top_rated.children[1]);
}

function get_data_best_movie(movie_id){
  var endpoint = "http://localhost:8000/api/v1/titles/"
  var url = endpoint.concat('', movie_id);
  var div_top_movie = document.getElementsByClassName('top_movie')[0];
  console.log(div_top_movie);
  var poster = div_top_movie.getElementsByClassName("poster")[0];
  var title = div_top_movie.getElementsByClassName("title")[0];
  var description = div_top_movie.getElementsByClassName("description")[0];
  var button = div_top_movie.getElementsByClassName("btn_more")[0];
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



select_movie_imdb_max(url).then(function(result) {
    movie_id = choice_best_movie(result['results']);
    create_top_movie_section();
    get_data_best_movie(movie_id);

  });