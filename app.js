$('button').on('click', function() {
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        var obj = {
          'api-key': "84d21462dd9242caaa0347095749defd",
          'q': "Elon Musk",
          'fq': "5",
          'begin_date': "2000",
          'end_date': "2016"
        };
        obj.q = "George W Bush";
        obj.fq = 1;
        obj.begin_date = "2000";
        obj.end_date = "2016";
        url += '?' + $.param(obj);
        console.log(url);
        $.ajax({
          url: url,
          method: 'GET',
        }).done(function(result) {
          console.log(result);
        }).fail(function(err) {
          throw err;
        });
    });
