var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch?q="
+ 'pokemon' + "&api_key=9499cc3db2d441218b9510d399f7e976&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div class="item">')

                    var rating = results[i].rating;

                    var p = $('<p>').text("Rating: " + rating);

                    var personImage = $('<img>');
                    personImage.attr('src', results[i].images.fixed_height.url);

                    gifDiv.append(p)
                    gifDiv.append(personImage)

                    $('#gifsAppearHere').prepend(gifDiv);
                }

            });









// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });