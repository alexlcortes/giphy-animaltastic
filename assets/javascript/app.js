var animals = ['lion', 'cheetah', 'hippo', 'turtle'];

function displayAnimals(){

	var animal = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		$("#gif-results").html(JSON.stringify(response));
		var results = response.data;
		console.log(results)
	});
}

function renderButtons() {

	$('#the-buttons').empty();

	for (var i = 0; i < animals.length; i++) {

		var a = $('<button>')

		a.addClass('new-animal');
		a.attr('data-name', animals[i]);
		a.text(animals[i]);
		$('#the-buttons').append(a);
	}
}

$('#add-animal').on('click', function(){

	var nextAnimal = $('#animal-input').val().trim();
	animals.push(nextAnimal);

	renderButtons();

	return false;

})

$(document).on('click', '.new-animal', displayAnimals);

	renderButtons();
