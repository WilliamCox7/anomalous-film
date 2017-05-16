angular.module('anomalous').controller('mainCtrl', function($scope, movies, $state) {
  var movieCount = 0;
  (() => {
    $scope.movieInfo = movies.getMovies();
  })();
  $(document).ready(() => {
    $('.movies').css('opacity', '1.0');
  });
  $scope.redirect = function(link) {
    $(document).ready(() => {
      $('.movies').css('opacity', '0.0');
    });
    setTimeout(function(){ $state.transitionTo(link); }, 1000);
  }
});
