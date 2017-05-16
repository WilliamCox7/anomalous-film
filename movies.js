angular.module('anomalous').service('movies', function() {
  this.getMovies = function() {
    return {
      "May '17": [
        {
          title: 'La La Land',
          poster: './src/lalaland.jpg',
          link: 'la-la-land'
        }
      ]
    }
  }
});
