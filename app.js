angular.module('anomalous', ['ui.router']).config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/',
      controller: 'homeCtrl'
    })
    .state('movies', {
      templateUrl: './views/movies.html',
      url: '/movies',
      controller: 'mainCtrl'
    })
    .state('la-la-land', {
      templateUrl: './views/la-la-land.html',
      url: '/movies/la-la-land',
      controller: 'movieCtrl'
    })
});
