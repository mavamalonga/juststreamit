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

      poster = document.createElement('img');
      poster.setAttribute('src', `${data['image_url']}`);

      title = document.createElement('h1');
      title.innerHTML = `${data['title']}`;

      description = document.createElement('p');
      description.setAttribute('class', 'description');
      description.innerHTML = `${data['long_description']}`;

      console.log(data['long_description'].length);

      if (data['long_description'].length <= 200){
        infoChild.style.top = "35%";
      }else if( data['long_description'].length >= 200 && data['long_description'].length <= 300){
        infoChild.style.top = "40%";
      }else if ( data['long_description'].length >= 300 && data['long_description'].length <= 400){
        infoChild.style.top = "45%";
      }else if ( data['long_description'].length >= 400 && data['long_description'].length <= 500){
        infoChild.style.top = "50%";
      }else if ( data['long_description'].length >= 500 && data['long_description'].length <= 600){
        infoChild.style.top = "55%";
      }else if ( data['long_description'].length >= 600 && data['long_description'].length <= 700){
        infoChild.style.top = "65%";
      }else if ( data['long_description'].length >= 700 && data['long_description'].length <= 800){
        infoChild.style.top = "70%";
      }else {
        infoChild.style.top = "70%";
      }


      // ul container all details abot movie
      ul = document.createElement('ul');

      genres = document.createElement('li');
      genres.setAttribute('class', 'genres');
      genres.innerHTML = `Genres: ${data['genres']}`;
      ul.appendChild(genres);

      directors = document.createElement('li');
      directors.setAttribute('class', 'directors');
      directors.innerHTML = `Directors: ${data['directors']}`;
      ul.appendChild(directors);


      actors = document.createElement('li');
      actors.setAttribute('class', 'actors');
      actors.innerHTML = `Actors: ${data['actors']}`;
      ul.appendChild(actors);

      countries = document.createElement('li');
      countries.setAttribute('class', 'countries');
      countries.innerHTML = `Countries: ${data['countries']}`;
      ul.appendChild(countries);

      duration = document.createElement('li');
      duration.setAttribute('class', 'duration');
      duration.innerHTML = `Duration: ${data['duration']} min`;
      ul.appendChild(duration);

      date_published = document.createElement('li');
      date_published.setAttribute('class', 'date_published');
      date_published.innerHTML = `Data published: ${data['date_published']}`;
      ul.appendChild(date_published);

      imdb_score = document.createElement('li');
      imdb_score.setAttribute('class', 'imdb_score');
      imdb_score.innerHTML = `Imdb score: ${data['imdb_score']}`;
      ul.appendChild(imdb_score);

      rated = document.createElement('li');
      rated.setAttribute('class', 'rated');
      rated.innerHTML = `Rated: ${data['rated']}`;
      ul.appendChild(rated);

      usa_gross_income = document.createElement('li');
      usa_gross_income.setAttribute('class', 'usa_gross_income');
      if (data['usa_gross_income'] == null){
        usa_gross_income.innerHTML = `Usa gross income: ${"No information available"}`;
      }else{
        usa_gross_income.innerHTML = `Usa gross income: ${data['usa_gross_income']}`;
      }
      ul.appendChild(usa_gross_income);

      infoContainer.appendChild(poster);
      infoContainer.appendChild(title);
      infoContainer.appendChild(description);
      infoChild.appendChild(ul);

      //infoContainer.appendChild(reader);
      infoContainer.appendChild(infoChild);
      body.appendChild(infoContainer);
      });

};
