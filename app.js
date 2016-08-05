$('button').on('click', function() {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
          'api-key': "84d21462dd9242caaa0347095749defd",
          'q': "Elon Musk",
          'fq': "5",
          'begin_date': "2000",
          'end_date': "2016"
        });
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          console.log(result);
        }).fail(function(err) {
          throw err;
        });
    });
