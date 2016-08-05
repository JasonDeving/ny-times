$('button').on('click', function() {
        var queryURL = "";

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