define(function(){
  $.ajax("https://leancloud.cn:443/1.1/classes/first_round_b",
  {
    headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
    success: function(data){
      for(var i = 0 ; i < data.results.length; i += 2) {
        var row$ = $('<tr>');
        var team1 = data.results[i]['left'] + ', ' + data.results[i]['right'];
        row$.append($('<td>').html(team1));
        if(i == 10) {var team1Status = "<p>晋级</p>"} else {
          if(data.results[i]['status'] == "晋级"){
            var team1Status = "<p>" + data.results[i]['status'] + "</p>";
          } else {
            var team1Status = data.results[i]['status'];
          }
        };
        row$.append($('<td>').html(team1Status));
        row$.append($('<td>').html('VS'));
        if(i == 10) { var team2 = ""} else {
        var team2 = data.results[i+1]['left'] + ', ' + data.results[i+1]['right'];
        };
        row$.append($('<td>').html(team2));
        if(i == 10) {var team2Status = ""} else {
        // var team2Status = data.results[i+1]['status'];
          if(data.results[i+1]['status'] == "晋级"){
            var team2Status = "<p>" + data.results[i+1]['status'] + "</p>";
          } else {
            var team2Status = data.results[i+1]['status'];
          }
        };
        row$.append($('<td>').html(team2Status));
        $("#first-round-b").append(row$);
      }
    }
  });
});
