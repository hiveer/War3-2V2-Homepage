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
//
// 乱序数组
require(["javascripts/shuffle"], function(shuffle){
})

// 获取报名列表
require(["javascripts/sign_up_list"], function(signUpList) {
})

// 报名入口
require(["javascripts/sign_up"], function(signUp) {
})

// 生成随机分组
require(["javascripts/randomize_group"], function(randomizeGroup) {
})

// 获取随机分组列表
require(["javascripts/randomized_group_list"], function(randomizedGroupList) {
})

// 生成第一轮对战列表
require(["javascripts/randomize_first_round_group"], function(randomizefirstRoundGroup) {
})

// 获取第一轮A 组对战列表
require(["javascripts/first_round_a_group_list"], function(firstRoundAGroupList) {
})

// 获取第一轮B 组对战列表
require(["javascripts/first_round_b_group_list"], function(firstRoundBGroupList) {
})

// 获取第二轮对战列表
require(["javascripts/second_round_group_list"], function(secondRoundGroupList) {
})

// 生成第三轮分组
require(["javascripts/randomize_third_round_group"], function(randomizeThirdRoundGroup) {
})

// 获取第三轮A 组列表
require(["javascripts/third_round_a_group_list"], function(thirdRoundAGroupList) {
})

// 获取第三轮B 组列表
require(["javascripts/third_round_b_group_list"], function(thirdRoundBGroupList) {
})

// 超过10.31 号就停止报名
if(new Date() > new Date("2016/10/31 23:59:59")) {
  $('#apply').attr("disabled", true);
  $('#sign-up-entry').append("<strong style='color:red'>(报名已经截止)</strong>");
  $('#list-header').html("公示名单");
  $('#list-header').attr("style", "text-align:center;color:#33eeff");
}
