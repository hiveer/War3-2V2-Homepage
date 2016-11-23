define(["./shuffle"], function(shuffle){
  $("#generate_round_three").click(function() {
    $.ajax("https://leancloud.cn:443/1.1/classes/first_round_a",
    {
      headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                  "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
      data: 'where={"status":"晋级"}',
      success: function(data){
        var shuffledList = shuffle(data.results);
        for(var i = 0 ; i < shuffledList.length; i++) {
          var result = shuffledList[i];
          if(i < Math.ceil(shuffledList.length/2)) {
            $.ajax("https://leancloud.cn:443/1.1/classes/third_round_a",
            {
              method: "POST",
              headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                        "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
              contentType: "application/json",
              processData: false,
              data: JSON.stringify({
                left:result.left,
                right:result.right,
                score: 0} )
            });
          }
          else {
            $.ajax("https://leancloud.cn:443/1.1/classes/third_round_b",
            {
              method: "POST",
              headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                        "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
              contentType: "application/json",
              processData: false,
              data: JSON.stringify({
                left:result.left,
                right:result.right,
                score: 0} )
            });
          }
        }
      }
    });
    $('#generate_round_three').attr("disabled", true);
  });
});
