app.controller('GameController', function($scope, gameService) {

  $scope.cards = gameService.cards;
  $scope.flippedCards = [];

  var MAX_SHOWN = 2;

  $scope.startGame = function() {
    gameService.fetchCards();
  }

  $scope.flip = function(card) {
    if ($scope.flippedCards.length === MAX_SHOWN) {
      $scope.flippedCards.shift();
    }
    $scope.flippedCards.push(card.index);
  }

  $scope.isShown = function(card) {
    return $scope.flippedCards.indexOf(card.index) !== -1
  }

})