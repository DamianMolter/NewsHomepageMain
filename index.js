$("#menu-icon").click(function () {
  $("#x-mark").removeClass("hidden");
  $("#x-mark").addClass("visible");
  $("#menu").addClass("mobile");
  $("#menu-icon").addClass("hidden");
});

$("#x-mark").click(function(){
      $("#x-mark").removeClass("visible");
      $("#x-mark").addClass("hidden");
      $("#menu").removeClass("mobile");
      $("#menu-icon").removeClass("hidden");
})
