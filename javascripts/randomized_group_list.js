define(function(){
  $.ajax("https://leancloud.cn:443/1.1/classes/group",
  {
    headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
    success: function(data){
      $('#group_count').append($('<strong>').html(data.results.length))
      for(var i = 0 ; i < data.results.length; i++) {
        var row$ = $('<tr>');
        var user1 = data.results[i]['left'];
        row$.append($('<td>').html(user1));
        var user2 = data.results[i]['right'];
        row$.append($('<td>').html(user2));
        var stats = data.results[i]['status'];
        row$.append($('<td>').html(stats));
        $("#group-list").append(row$);
      }
    }
  });
});
