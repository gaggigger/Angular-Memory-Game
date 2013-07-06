app.controller('GameController', function($scope, gameService) {

  $scope.cards = gameService.cards;

  $scope.startGame = function() {
    gameService.fetchCards();
  }

})