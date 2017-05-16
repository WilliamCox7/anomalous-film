angular.module('anomalous').controller('homeCtrl', function($state) {
  $(document).ready(() => {
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
    $(window).bind(mousewheelevt, (e) => {
      var evt = window.event || e //equalize event object
      evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
      var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

      if(delta <= 0) {
          $("#mouse").css('marginTop', "+=400");
          $(".border").css('opacity', '0.0');
          setTimeout(function(){ $state.transitionTo('movies'); }, 1000);
      }
    });
  });
});
