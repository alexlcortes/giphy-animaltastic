var animals = ['lion', 'cheetah', 'hippo', 'turtle', 'giraff'];

function displayAnimals() {

	var animal = $(this).attr('data-name');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		$("#gif-results").html(JSON.stringify(response));
	});
}

function renderButtons () {

	$('#the-buttons').empty();

	for (var i = 0; i < animals.length; i++) {

		var a = $('#the-buttons')

		a.addClass('new-animal');
		a.attr('data-name', animals[i]);
		a.text(animals[i]);
		$('#the-buttons').append(a);
	}
}