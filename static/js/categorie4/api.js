
function selectAnimationMovies(request_url){
  return fetch(request_url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function mainAnimationMovies(){
	// urls variables 
	const urlPage1 = "http://localhost:8000/api/v1/titles/?genre=animation&sort_by=-imdb_score"
	const urlPage2 = "http://localhost:8000/api/v1/titles/?genre=animation&sort_by=-imdb_score&page=2"

	// get parent node
	var container4 = document.getElementsByClassName("parent4")[0];
	var allBox4 = container4.getElementsByClassName("child4")[0];
	var items4 = allBox4.getElementsByClassName('item');

	// variables 
	var nbAnimationMoviesAdded  = 0;

	for (urlAnimationPage of [urlPage1, urlPage2]){
		selectAnimationMovies(urlAnimationPage).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nbAnimationMoviesAdded < 7){
  					// update item
  					img = items4[nbAnimationMoviesAdded].getElementsByTagName("img")[0];
  					img.src = `${result['results'][i]['image_url']}`;
  					title = items4[nbAnimationMoviesAdded].getElementsByClassName('title')[0];
  					title.innerHTML = `${result['results'][i]['title']}`;
			    }
			    nbAnimationMoviesAdded++;
  			}
   		});	
	}
}

mainAnimationMovies();