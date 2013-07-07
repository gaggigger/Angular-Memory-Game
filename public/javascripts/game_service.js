app.factory('gameService', ['$http', function($http) {
  var cards = [];

  function fetchCards() {
    $http({
      url: '/game/cards',
      method: 'GET'
    })
    .success(function(data, status, headers, config) {
      angular.copy(data.cards, cards);
    })
  }

  return {
    cards: cards,
    fetchCards: fetchCards
  }
}]);