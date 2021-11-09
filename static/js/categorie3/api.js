
function selectAdventureMovies(request_url){
  return fetch(request_url).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

function mainAdventureMovies(){
	// urls variables 
	const urlPage1 = "http://localhost:8000/api/v1/titles/?genre=adventure&sort_by=-imdb_score"
	const urlPage2 = "http://localhost:8000/api/v1/titles/?genre=adventure&sort_by=-imdb_score&page=2"

	// get parent node
	var container3 = document.getElementsByClassName("parent3")[0];
	var allBox3 = container3.getElementsByClassName("child3")[0];
	var items3 = allBox3.getElementsByClassName('item');

	// variables 
	var nbAdventureMoviesAdded  = 0;

	for (urlAdventurePage of [urlPage1, urlPage2]){
		selectAdventureMovies(urlAdventurePage).then(function(result) {
  			for (let i = 0; i < result['results'].length; i++){
  				if (nbAdventureMoviesAdded < 7){
  					// update item
  					img = items3[nbAdventureMoviesAdded].getElementsByTagName("img")[0];
  					img.src = `${result['results'][i]['image_url']}`;
  					/*title = items3[nbAdventureMoviesAdded].getElementsByClassName('title')[0];
  					title.innerHTML = `${result['results'][i]['title']}`;*/
  					img.setAttribute('onclick', 'openModal(this)');
  					img.setAttribute("id", `${result['results'][i]['id']}`);
			  	}
			    nbAdventureMoviesAdded++;
  			}
   		});	
	}
}

mainAdventureMovies();