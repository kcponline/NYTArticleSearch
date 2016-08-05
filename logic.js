	// pseudo 01: check vjs link
// document.write("js link check - to be comment out later");
	// pseudo 02: check jq link
// $('#jq-check').html("jq link check - to be comment out later");


	// pseudo 03: 1st to make sure to get response from nyt api
	// use console.log to confirm getting the object with hard code
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
// + 'pokemon' + "&api_key=9499cc3db2d441218b9510d399f7e976&limit=10";

	// pseudo 04: with nyt api url working, test hard code all 4 parameters
	// instead of just the initial 2 which were search term and article limit
	// have to work around limit parameter for now.
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
// + "?q=" + "pokemon" + "&begin_date=" + "20160804" + "&end_date="
// + "20160804" + "&api_key=9499cc3db2d441218b9510d399f7e976" + "&limit=5";

	// pseudo 05: do simple 3 parameter scenario based on query term
	// on the article body, headline and byline with start & end date yyyymmdd
	// and just either html or append to input container


	$('#submit').on('click', function(){
			// watchout and should assign variable within the scope
			// instead of global variable or else the api url won't
			// concatenate unable to find the variables in ajax
		var queryTerm = $('#search').val();

		var queryStart = $('#start').val();

		var queryEnd = $('#end').val();

		// var apiKey = 

		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
		+ "?q=" + queryTerm + "&begin_date=" + queryStart + "&end_date="
		+ queryEnd + "&api_key=9499cc3db2d441218b9510d399f7e976" + "&limit=5";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
            	$('#input').append(JSON.stringify(response));
            	console.log(queryURL)
            	console.log(response)
            	});
            return false;
    });
                // var results = response.data;

                // for (var i = 0; i < results.length; i++) {
                //     var gifDiv = $('<div class="item">')

                //     var rating = results[i].rating;

                //     var p = $('<p>').text("Rating: " + rating);

                //     var personImage = $('<img>');
                //     personImage.attr('src', results[i].images.fixed_height.url);

                //     gifDiv.append(p)
                //     gifDiv.append(personImage)

                //     $('#gifsAppearHere').prepend(gifDiv);
                // }

    // pseudo 06: additional coding for clear results and no input fields and
    // getting response for top articles

    // pseudo 07: display images, headlines, and abstract by specifying the
    // exact path of properties instead of dumping the entire object
