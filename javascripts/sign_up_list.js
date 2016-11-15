define(function(){
  $.ajax("https://leancloud.cn:443/1.1/classes/apply_record",
  {
    headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
    success: function(data){
      $('#count').append($('<strong>').html(data.results.length))
      for(var i = 0 ; i < data.results.length; i++) {
        var row$ = $('<tr>');
        var nickName = data.results[i]['nickname'];
        row$.append($('<td>').html(nickName));
        var platFormId = data.results[i]['platform_id'];
        row$.append($('<td>').html(platFormId));
        var race = data.results[i]['race'];
        row$.append($('<td>').html(race));
        $("#apply-list").append(row$);
      }
    }
  });
});

