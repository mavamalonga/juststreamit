
function request_best_movies_ranted(url){
  return fetch(url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}


function main_best_movies_ranted(){
	// urls variables 
	const url_page_1 = "http://localhost:8000/api/v1/titles/?imdb_score_min=9.4&imdb_score_max=10"
	const url_page_2 = "http://localhost:8000/api/v1/titles/?imdb_score_min=9.4&imdb_score_max=10&page=2"

	// get parent node
	var row_best_ranted = document.getElementsByClassName("row")[0];
	var raw_posters = row_best_ranted.getElementsByClassName("row_posters")[0];

	let movie_list = []
	let arr = []
	for (url_ of [url_page_1, url_page_2]){
		request_best_movies_ranted(url_).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				var poster = document.createElement('img');
			  	var attr_class = document.createAttribute('class');
			  	attr_class.value = "row_posters";
			  	poster.setAttributeNode(attr_class);
			  	var attr_src = document.createAttribute('src');
			  	attr_src.value = `${result['results'][i]['image_url']}`;
			  	poster.setAttributeNode(attr_src);
			  	raw_posters.appendChild(poster);

  				movie_list.push(result['results'][i])
  			}
   		});	
	}
	// javascript sort array with objects
	arr = movie_list.sort(function(a,b) {
    	return b.year - a.year;
    });
	/*
	// display movies with DOM
   	for (let i=0; i < movie_list.length; i++){
   		console.log(movie_list[i]);
		var poster = document.createElement('img');
	  	var attr_class = document.createAttribute('class');
	  	attr_class.value = "row_posters";
	  	poster.setAttributeNode(attr_class);
	  	var attr_src = document.createAttribute('src');
	  	attr_src.value = `${arr['image_url']}`;
	  	poster.setAttributeNode(attr_src);
	  	raw_posters.appendChild(poster);
	}
	*/
}

main_best_movies_ranted();
