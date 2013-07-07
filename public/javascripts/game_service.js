app.factory('gameService', ['$http', function($http) {
  var cards = [];

  function fetchCards() {
    $http
      .get('/game/cards')
      .then(function (response) {
        /* 'response' is of the format
         * {config: [Object object], data: [Object object], status: [Object object], headers: [Object object]}
         */
        angular.copy(response.data.cards, cards)
      });
  }

  return {
    cards: cards,
    fetchCards: fetchCards
  }
}]);