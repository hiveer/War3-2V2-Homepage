define(["shuffle"], function(shuffle){
  $("#generate_group").click(function() {
    $.ajax("https://leancloud.cn:443/1.1/classes/apply_record",
    {
      headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                  "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
      success: function(data){
        var shuffledList = shuffle(data.results);
        for(var i = 0 ; i < shuffledList.length; i += 2) {
          var leftValue = shuffledList[i].platform_id + " - " + shuffledList[i].race;
          var rightValue = shuffledList[i+1].platform_id + " - " + shuffledList[i+1].race;
          $.ajax("https://leancloud.cn:443/1.1/classes/group",
          {
            method: "POST",
            headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                      "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
            contentType: "application/json",
            processData: false,
            data: JSON.stringify({
              left:leftValue,
              right:rightValue,
              status:''} )
          });
        }
      }
    });
    $('#generate_group').attr("disabled", true);
  });
});
