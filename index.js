window.onresize = function(){
      if(window.innerWidth <= 1000){
            $(".menu-option").remove();
            $(".menu").append("<div class='hidden-menu'><img src='assets/images/icon-menu.svg'></div>");
      }
}