$('button').on('click', function() {
        var queryURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key= 0a25350fb21f4a6f988e4140ea4f32b7";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                // step 1: Run this file, click a button, and see what the data looks like in the browser's console. Open up the Object, then open up the data key, then open up 0. Study the keys and how the JSON is structured.
                console.log(queryURL)
                console.log(response)
               
            });
    });
