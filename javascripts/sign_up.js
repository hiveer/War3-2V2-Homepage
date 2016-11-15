define(function(){
  $("#apply").click(function() {
    if($("#exampleInputNickname").val().trim() == '') {
        alert("nickname 不能为空");
        return
      }
    if($("#exampleInputPlatformId").val().trim() == '') {
      alert("平台ID 不能为空");
      return
    }
    if($("#exampleInputRace").val().trim() == '') {
      alert("种族不能为空");
      return
    }

    $.ajax("https://leancloud.cn:443/1.1/classes/apply_record",
    {
      method: "POST",
      headers: { "X-LC-Id": "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz",
                 "X-LC-Key": "UX3z5HDqeVE911LSHXfzrAqE" },
      contentType: "application/json",
      processData: false,
      // data: '{"nickname":"'+$("#exampleInputNickname").val()+'","platform_id":"'+$("#exampleInputPlatformId").val()+'","race":"'+$("#exampleInputRace").val()+'"}',
      data: JSON.stringify( {nickname:$("#exampleInputNickname").val(), platform_id:$("#exampleInputPlatformId").val(), race: $("#exampleInputRace").val()} ),
      success: function(data) {
        window.location.reload();
        alert("报名成功，请查看已报名人员名单！")
      },
      error: function(error) {
        alert(error); }
    });
  });
});
