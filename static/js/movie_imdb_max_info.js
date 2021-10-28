

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

  // div contents elements details 
  var ul = document.createElement("ul");
  div_info.appendChild(ul);

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
  div_info.appendChild(button);

  // title
  var title = document.createElement('h1');
  var attr_class = document.createAttribute('class');
  attr_class.value = "title";
  title.setAttributeNode(attr_class);
  div_info.appendChild(title);

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

  // get elements
  var div_top_movie = document.getElementsByClassName('top_movie')[0];
  var div_info = document.getElementsByClassName('info')[0];
  var poster = div_top_movie.getElementsByClassName("poster")[0];
  var title = div_info.getElementsByClassName("title")[0];
  var ul =  div_info.querySelectorAll("ul")[0];
  var button = div_info.querySelectorAll("input")[0];

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // div top movie
      poster.setAttribute("src", data['image_url']);
      div_top_movie.appendChild(poster);

      // details

      var long_description = document.createElement("li");
      long_description.innerHTML = `Long description <br>${data['long_description']} <br><br>`;
      ul.appendChild(long_description);

      var usa_gross_income = document.createElement("li");
      usa_gross_income.innerHTML = `Usa gross income ${data['usa_gross_income']}`;
      ul.appendChild(usa_gross_income);

      var countries = document.createElement("li");
      countries.innerHTML = `Countries ${data['countries']}`;
      ul.appendChild(countries);

      var duration = document.createElement("li");
      duration.innerHTML = `Duration ${data['duration']}`;
      ul.appendChild(duration);

      var actors = document.createElement("li");
      actors.innerHTML = `Actors ${data['actors']}`;
      ul.appendChild(actors);

      var directors = document.createElement("li");
      directors.innerHTML = `Directors ${data['directors']}`;
      ul.appendChild(directors);

      var imdb_score = document.createElement("li");
      imdb_score.innerHTML = `Imdb score ${data['imdb_score']}`;
      ul.appendChild(imdb_score);

      var rated = document.createElement("li");
      rated.innerHTML = `Ranted ${data['rated']}`;
      ul.appendChild(rated);

      var date_published = document.createElement("li");
      date_published.innerHTML = `Date published ${data['date_published']}`;
      ul.appendChild(date_published);

      title.innerHTML = data['title'];
      div_info.appendChild(title);

      div_info.appendChild(ul);

      div_info.appendChild(button);

      div_top_movie.appendChild(div_info);
      });
};