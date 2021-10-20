

function create_details_section(){
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

  // title
  var title = document.createElement('h1');
  var attr_class = document.createAttribute('class');
  attr_class.value = "title";
  title.setAttributeNode(attr_class);
  div_top_movie.appendChild(title);

  // div contents elements details 
  var div_details = document.createElement("ul");
  var attr_class = document.createAttribute("class");
  attr_class.value = "details";

  // all elements details
  var genres = document.createElement("li");
  var release_date = document.createElement("li");
  var ranted = document.createElement("li");
  var Imdb = document.createElement("li");
  var director = document.createElement("li");
  var list_actors = document.createElement("li");
  var duration = document.createElement("li");
  var country_origin = document.createElement("li");
  var result_box_office= document.createElement("li");
  var film_summary = document.createElement("li");
  div_details.appendChild(genres);
  div_details.appendChild(release_date);
  div_details.appendChild(ranted);
  div_details.appendChild(Imdb);
  div_details.appendChild(director);
  div_details.appendChild(list_actors);
  div_details.appendChild(duration);
  div_details.appendChild(country_origin);
  div_details.appendChild(result_box_office);
  div_details.appendChild(film_summary);
  div_top_movie.appendChild(div_details);

  // button : previous
  var button = document.createElement("input");
  var attr_type = document.createAttribute("type");
  attr_type.value = "button"
  var attr_class = document.createAttribute("class");
  attr_class.value = "btn_previous";
  var attr_onclick = document.createAttribute("onclick");
  attr_onclick.value = "top_movie()";
  var attr_value = document.createAttribute("value");
  attr_value.value = "Previous";
  button.setAttributeNode(attr_type);
  button.setAttributeNode(attr_class);
  button.setAttributeNode(attr_onclick);
  button.setAttributeNode(attr_value);
  div_top_movie.appendChild(button);

  // insert elemnets
  div_top_rated.insertBefore(div_top_movie, div_top_rated.children[1]);
}

function more_top_movie(){
  // recovery of container elements
  var div_top_rated = document.getElementsByClassName("top_rated")[0];
  var div_top_movie = document.getElementsByClassName("top_movie")[0];

  // request
  var move_id = document.getElementsByClassName("btn_more")[0].getAttribute("id");
  var endpoint = "http://localhost:8000/api/v1/titles/"
  var url = endpoint.concat('', movie_id);

  // delete
  div_top_rated = div_top_rated.removeChild(div_top_movie);

  // build new div top movie
  create_details_section();


  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      });
};