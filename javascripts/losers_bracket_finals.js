define(function(){
  $.ajax("https://leancloud.cn:443/1.1/classes/losers_bracket_finals",
  {
    headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
    success: function(data){
      for(var i = 0 ; i < data.results.length; i++) {
        var row$ = $('<tr>');
        var team = data.results[i]['left'] + ', ' + data.results[i]['right'];
        row$.append($('<td>').html(team));
        var notes = data.results[i]['status'];
        if(notes == "季军"){
          row$.append($('<td id="third_winner">').html(notes));
        } else {
          row$.append($('<td>').html(notes));
        }
        $("#losers-bracket-finals").append(row$);
      }
    }
  });
});
