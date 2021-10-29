
function selectComicalMovies(request_url){
  return fetch(request_url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function mainComicalMovies(){
	// urls variables 
	const urlPage1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
	const urlPage2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2"

	// get parent node
	var container3 = document.getElementsByClassName("thumbnail-slider3")[0];
	var allBox3 = container3.getElementsByClassName("thumbnail-container3")[0];
	var items3 = allBox3.getElementsByClassName('item');

	// variables 
	var nbComicalMoviesAdded  = 0;

	for (urlComicalPage of [urlPage1, urlPage2]){
		selectComicalMovies(urlComicalPage).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nbComicalMoviesAdded < 7){
  					// update item
  					img = items3[i].getElementsByTagName("img")[0];
  					img.src = `${result['results'][i]['image_url']}`
			  }
			  nbComicalMoviesAdded++;
  			}
   		});	
	}
}

mainComicalMovies();