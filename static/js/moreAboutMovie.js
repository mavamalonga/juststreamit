function moreAboutMovie(ele){

  // url request
  movieId = ele.id;
  console.log(movieId);
  const endpoint = "http://localhost:8000/api/v1/titles/"
  const urlTopMovie = endpoint.concat('', movieId);

  // get data from api
  fetch(urlTopMovie)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      // elments html
      bodyChildren = document.body.children;
      bodyChildren[1].remove();
      bodyChildren[2].remove();
      bodyChildren[4].remove();
      bodyChildren[6].remove();
      bodyChildren[8].remove();
      
      // create new elements
      body = document.body;
      infoContainer = document.createElement('div');
      infoContainer.setAttribute('class', 'info-parent');

      infoChild = document.createElement('div');
      infoChild.setAttribute('class', 'info-child');

      reader = document.createElement('img');
      reader.setAttribute('src', '../static/img/moviebackground.png');
      reader.setAttribute('class', 'reader')

      poster = document.createElement('img');
      poster.setAttribute('src', `${data['image_url']}`);

      title = document.createElement('h1');
      title.innerHTML = `${data['title']}`;

      description = document.createElement('p');
      description.setAttribute('class', 'description');
      description.innerHTML = `${data['long_description']}`;

      genres = document.createElement('p');
      genres.setAttribute('class', 'genres');
      genres.innerHTML = `Genres: ${data['genres']}`;

      directors = document.createElement('p');
      directors.setAttribute('class', 'directors');
      directors.innerHTML = `Directors: ${data['directors']}`;

      actors = document.createElement('p');
      actors.setAttribute('class', 'actors');
      actors.innerHTML = `Actors: ${data['actors']}`;

      countries = document.createElement('p');
      countries.setAttribute('class', 'countries');
      countries.innerHTML = `Countries: ${data['countries']}`;

      duration = document.createElement('p');
      duration.setAttribute('class', 'duration');
      duration.innerHTML = `Duration: ${data['duration']} min`;

      date_published = document.createElement('p');
      date_published.setAttribute('class', 'date_published');
      date_published.innerHTML = `Data published: ${data['date_published']}`;

      imdb_score = document.createElement('p');
      imdb_score.setAttribute('class', 'imdb_score');
      imdb_score.innerHTML = `Imdb score: ${data['imdb_score']}`;

      rated = document.createElement('p');
      rated.setAttribute('class', 'rated');
      rated.innerHTML = `Rated: ${data['rated']}`;

      usa_gross_income = document.createElement('p');
      usa_gross_income.setAttribute('class', 'usa_gross_income');
      usa_gross_income.innerHTML = `Usa gross income: ${data['usa_gross_income']}`;

      infoChild.appendChild(poster);
      infoChild.appendChild(title);
      infoChild.appendChild(description);
      infoChild.appendChild(genres);
      infoChild.appendChild(directors);
      infoChild.appendChild(actors);
      infoChild.appendChild(countries);
      infoChild.appendChild(duration);
      infoChild.appendChild(date_published);
      infoChild.appendChild(imdb_score);
      infoChild.appendChild(rated);
      infoChild.appendChild(usa_gross_income);

      infoContainer.appendChild(reader);
      infoContainer.appendChild(infoChild);
      body.appendChild(infoContainer);
      });

};
