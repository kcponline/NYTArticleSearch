	// pseudo 01: check vjs link
// document.write("js link check - to be comment out later");
	// pseudo 01: check jq link
// $('#jq-check').html("jq link check - to be comment out later");


	// pseudo 01: 1st to make sure to get response from nyt api
	// use console.log to confirm getting the object with hard code
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
+ 'pokemon' + "&api_key=9499cc3db2d441218b9510d399f7e976&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
            	console.log(queryURL)
            	console.log(response)
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

            });
