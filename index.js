$("#menu-icon").click(function () {
  $("#x-mark").removeClass("hidden");
  $("#x-mark").addClass("visible");
  $("#menu").addClass("mobile");
  $("#menu-icon").addClass("hidden");
  $("body").addClass("covered");
});

$("#x-mark").click(function(){
      $("#x-mark").removeClass("visible");
      $("#x-mark").addClass("hidden");
      $("#menu").removeClass("mobile");
      $("#menu-icon").removeClass("hidden");
      $("body").removeClass("covered");
})
