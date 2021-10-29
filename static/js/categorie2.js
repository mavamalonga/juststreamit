
function selectActionMovies(request_url){
  return fetch(request_url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function mainActionMovies(){
	// urls variables 
	const url_page_1 = "http://localhost:8000/api/v1/titles/?genre=action&sort_by=-imdb_score"
	const url_page_2 = "http://localhost:8000/api/v1/titles/?genre=action&page=2&sort_by=-imdb_score"

	// get parent node
	var categorie2 = document.getElementsByClassName("categorie2")[0];
	var categorie2Contains = categorie2.getElementsByClassName("categorie2-container")[0];
	var categorie2Items = categorie2Contains.getElementsByClassName('item');

	// variables 
	var nb_movies_added  = 0;

	for (url_ of [url_page_1, url_page_2]){
		selectActionMovies(url_).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nb_movies_added < 7){
  					// update item
  					img = categorie2Items[i].getElementsByTagName("img")[0];
  					img.src = `${result['results'][i]['image_url']}`
			  }
			  nb_movies_added++;
  			}
   		});	
	}
	
}

mainActionMovies();