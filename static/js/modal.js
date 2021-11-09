function openModal(ele){
  // Get the modal
  movieId = ele.id;
  var modal = document.getElementById("myModal");

  // url
  movieId = ele.id;
  const endpoint = "http://localhost:8000/api/v1/titles/"
  const urlTopMovie = endpoint.concat('', movieId);

  // make request to api
  fetch(urlTopMovie)
    .then(response => response.json())
    .then(data => {
      poster = modal.getElementsByTagName('img')[0];
      title = modal.getElementsByTagName('h1')[0];
      description = modal.getElementsByTagName('p')[0];
      ul = modal.getElementsByTagName('ul')[0];
      poster.setAttribute('src', `${data['image_url']}`);
      title.innerHTML = `${data['title']}`;
      description.innerHTML = `${data['long_description']}`;
      ul.children[0].innerHTML = `Genres: ${data['genres']}`;
      ul.children[1].innerHTML = `Directors: ${data['directors']}`;
      ul.children[3].innerHTML = `Actors: ${data['actors']}`;
      ul.children[4].innerHTML = `Countries: ${data['countries']}`;
      ul.children[5].innerHTML = `Duration: ${data['duration']} min`;
      ul.children[6].innerHTML = `Data published: ${data['date_published']}`;
      ul.children[7].innerHTML = `Imdb score: ${data['imdb_score']}`;
      ul.children[8].innerHTML = `Rated: ${data['rated']}`;

      if (data['long_description'].length <= 200){
        ul.style.top = "35%";
      }else if( data['long_description'].length >= 200 && data['long_description'].length <= 300){
        ul.style.top = "40%";
      }else if ( data['long_description'].length >= 300 && data['long_description'].length <= 400){
        ul.style.top = "45%";
      }else if ( data['long_description'].length >= 400 && data['long_description'].length <= 500){
        ul.style.top = "50%";
      }else if ( data['long_description'].length >= 500 && data['long_description'].length <= 600){
        ul.style.top = "55%";
      }else if ( data['long_description'].length >= 600 && data['long_description'].length <= 700){
        ul.style.top = "65%";
      }else if ( data['long_description'].length >= 700 && data['long_description'].length <= 800){
        ul.style.top = "70%";
      }else if ( data['long_description'].length >= 800 && data['long_description'].length <= 900){
        ul.style.top = "75%";
      }else{
        ul.style.top = "80%";
      }

  });

  modal.style.display = "block";
}

function closeModal(){
  // Get the <span> element that closes the modal
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
