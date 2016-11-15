define(function(){
  $.ajax("https://leancloud.cn:443/1.1/classes/first_round_a",
  {
    headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
    success: function(data){
      for(var i = 0 ; i < data.results.length; i += 2) {
        var row$ = $('<tr>');
        var team1 = data.results[i]['left'] + ', ' + data.results[i]['right'];
        row$.append($('<td>').html(team1));
        var team1Status = data.results[i]['status'];
        row$.append($('<td>').html(team1Status));
        row$.append($('<td>').html('VS'));
        var team2 = data.results[i+1]['left'] + ', ' + data.results[i+1]['right'];
        row$.append($('<td>').html(team2));
        var team2Status = data.results[i+1]['status'];
        row$.append($('<td>').html(team2Status));
        $("#first-round-a").append(row$);
      }
    }
  });
});
