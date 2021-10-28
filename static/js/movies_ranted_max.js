
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
	var row_best_ranted = document.getElementsByClassName("row")[0];
	var raw_posters = row_best_ranted.getElementsByClassName("row_posters")[0];

	// variables 
	var nb_movies_added  = 0;
	var best_move_id = 9008642;

	for (url_ of [url_page_1, url_page_2]){
		select_movies_max_ranted(url_).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nb_movies_added < 7 && result['results'][i]['id'] !== best_move_id){
	  				var poster = document.createElement('img');
				  	var attr_class = document.createAttribute('class');
				  	attr_class.value = "row_posters";
				  	poster.setAttributeNode(attr_class);
				  	var attr_src = document.createAttribute('src');
				  	attr_src.value = `${result['results'][i]['image_url']}`;
				  	poster.setAttributeNode(attr_src);
				  	raw_posters.appendChild(poster);
			  }
			  nb_movies_added++;
  			}
   		});	
	}
	
}

main_movies_max_ranted();
