/*
 * Names of injected entities are listed so that functionality will still work post minification
 * http://stephanebegaudeau.tumblr.com/post/48776908163/everything-you-need-to-understand-to-start-with
 */
app.controller('GameController', ['$scope', 'gameService', function($scope, gameService) {

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

}]);