define(function(){
  $.ajax("https://leancloud.cn:443/1.1/classes/third_round_a",
  {
    headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
    success: function(data){
      for(var i = 0 ; i < data.results.length; i++) {
        var row$ = $('<tr>');
        var team = data.results[i]['left'] + ', ' + data.results[i]['right'];
        row$.append($('<td>').html(team));
        var teamScore = data.results[i]['score'];
        row$.append($('<td>').html(teamScore));
        var notes = data.results[i]['notes'];
        row$.append($('<td>').html(notes));
        $("#third-round-a").append(row$);
      }
    }
  });
});
