
function selectActionMovies(request_url){
  return fetch(request_url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function mainActionMovies(){
	// urls variables 
	const urlPage1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
	const urlPage2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2"

	// get parent node
	var container2 = document.getElementsByClassName("thumbnail-slider2")[0];
	var allBox2 = container2.getElementsByClassName("thumbnail-container2")[0];
	var items2 = allBox2.getElementsByClassName('item');

	// variables 
	var nbActionMoviesAdded  = 0;

	for (urlActionPage of [urlPage1, urlPage2]){
		selectActionMovies(urlActionPage).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nbActionMoviesAdded < 7){
  					// update item
  					img = items2[i].getElementsByTagName("img")[0];
  					img.src = `${result['results'][i]['image_url']}`
			  }
			  nbActionMoviesAdded++;
  			}
   		});	
	}
}

mainActionMovies();