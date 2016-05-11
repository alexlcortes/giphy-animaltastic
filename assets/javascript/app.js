$(document).ready(function() {

	var animals = ['lion', 'cheetah', 'hippo', 'turtle'];

	function displayAnimals() {

		var animal = $(this).data('name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			var results = response.data;

			for (var i = 0; i < results.length; i++) {

				    var animalDiv = $('<div>');

                    var p = $('<p>').text("Rating: " + results[i].rating);

                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);

                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $('#gif-results').prepend(animalDiv);

                }
            });
	}





			// var animalImage = $("<img>");
			// animalImage.attr('src', imageUrl);
            // animalImage.attr('alt', 'animal image');
            // $('#git-results').prepend(animalImage);
			// $("#gif-results").html(JSON.stringify(response));



	function renderButtons() {

		$('#the-buttons').empty();

		for (var i = 0; i < animals.length; i++) {

			var a = $('<button>');

			a.addClass('.new-animal');
			a.attr('data-name', animals[i]);
			a.attr('id', i);
			a.text(animals[i]);
			$('#the-buttons').append(a);
		}
	}

	$('#add-animal').on('click', function(){
		
		var nextAnimal = $('#animal-input').val().trim();

		animals.push(nextAnimal);

		renderButtons();

		return false;

	});

	$(document).on('click', '.new-animal', displayAnimals);

	renderButtons();
	


});





