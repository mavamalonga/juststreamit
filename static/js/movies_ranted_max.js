
function select_movies_max_ranted(request_url){
  return fetch(request_url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function main_movies_max_ranted(){
	// urls variables 
	const url_page_1 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score"
	const url_page_2 = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2"

	// get parent node
	var container_ = document.getElementsByClassName("thumbnail-slider")[0];
	var allBox_ = container_.getElementsByClassName("thumbnail-container")[0];
	var items_ = allBox_.getElementsByClassName('item');

	// variables 
	var nb_movies_added  = 0;
	var best_move_id = 9008642;

	for (url_ of [url_page_1, url_page_2]){
		select_movies_max_ranted(url_).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nb_movies_added < 7 && result['results'][i]['id'] !== best_move_id){
  					// update item
  					img = items_[i].getElementsByTagName("img")[0];
  					img.src = `${result['results'][i]['image_url']}`
			  }
			  nb_movies_added++;
  			}
   		});	
	}
	
}

main_movies_max_ranted();