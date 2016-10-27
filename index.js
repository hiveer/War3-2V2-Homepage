// LeanCloud 的原生的数据读写方式
// 应用 ID，用来识别应用
// var APP_ID = "u13g5ML53PDR4dponmtvMQRu-gzGzoHsz";
// 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
// var APP_KEY = "UX3z5HDqeVE911LSHXfzrAqE";
// 初始化
// AV.init({
  // appId: APP_ID,
  // appKey: APP_KEY
// });

//  原始写数据的方式
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   testabc: 'abc123'
// }).then(function() {
//   alert('LeanCloud works!');
// }).catch(function(err) {
//   alert('error:' + err);
// });

// 原始读数据的方式
//var tobj = new AV.Query('apply_record');
//tobj.get('580e0bbd8ac247005b5dfcd0').then(function(data) {
//  alert(data.get("nickname"));
//}, function(error) {});
//
$(function(){
  var loadList = function() {
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
          // $("#apply-list").html(row$);
        }
      }
    });
  };

  loadList();

 $("#apply").click(function() {
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
  })
});
