const url_top_movie = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"

function select_movie_imdb_max(url_top_movie){
  return fetch(url_top_movie).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function choice_movie_max_votes(movies){
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

function create_dom_elements(){

  // delete div top movie if exist
  try {
      var div_top_rated = document.getElementsByClassName("top_rated")[0];
      var old_div_top_movie = document.getElementsByClassName("top_movie")[0];
      div_top_rated = div_top_rated.removeChild(old_div_top_movie);
    } catch (error){
      // pass
    }

  // get node 
  var div_top_rated = document.getElementsByClassName("top_rated")[0];

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

  // div info
  var div_info = document.createElement("div");
  var attr_class = document.createAttribute('class');
  attr_class.value = "info";
  div_info.setAttributeNode(attr_class);
  div_top_movie.insertBefore(div_info, div_top_movie.children[-1]);
  div_top_rated.insertBefore(div_top_movie, div_top_rated.children[1]);

  //get div top movie and div info
  var div_top_movie = document.getElementsByClassName("top_movie")[0];
  var div_info = document.getElementsByClassName("info")[0];

  // title
  var title = document.createElement('h1');
  var attr_class = document.createAttribute('class');
  attr_class.value = "title";
  title.setAttributeNode(attr_class);
  div_info.appendChild(title);

  // description
  var description = document.createElement("p");
  var attr_class = document.createAttribute("class");
  attr_class.value = "description";
  description.setAttributeNode(attr_class);
  div_info.appendChild(description);


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
  div_info.appendChild(button);

  // insert elemnets
  //div_top_rated.insertBefore(div_top_movie, div_top_rated.children[1]);
}

function get_data_best_movie(movie_id){

  // get elements html
  var endpoint = "http://localhost:8000/api/v1/titles/"
  var url = endpoint.concat('', movie_id);
  var div_top_movie = document.getElementsByClassName('top_movie')[0];
  var div_info = document.getElementsByClassName('info')[0];
  var poster = div_top_movie.getElementsByClassName("poster")[0];
  var title = div_info.getElementsByClassName("title")[0];
  var description = div_info.getElementsByClassName("description")[0];
  var button = div_top_movie.getElementsByClassName("btn_more")[0];

  // request api get data movie
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // insert data in html elements
      poster.setAttribute("src", data['image_url']);
      title.innerHTML = data['title'];
      description.innerHTML = `Description  <br><br> ${data['description']}`;
      button.setAttribute("id", `${movie_id}`);
      div_info.appendChild(title);
      div_info.appendChild(description);
      div_top_movie.appendChild(poster);
      div_top_movie.appendChild(div_info);
      div_info.appendChild(button);
    });
};


function top_movie(){
  select_movie_imdb_max(url_top_movie).then(function(result) {
      movie_id = choice_movie_max_votes(result['results']);
      create_dom_elements();
      get_data_best_movie(movie_id);

    });
}