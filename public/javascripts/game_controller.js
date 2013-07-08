/*
 * Names of injected entities are listed so that functionality will still work post minification
 * http://stephanebegaudeau.tumblr.com/post/48776908163/everything-you-need-to-understand-to-start-with
 */
app.controller('GameController', ['$scope', 'gameService', '_', function($scope, gameService, _) {

  $scope.cards = gameService.cards;

  var flipped = []
    , revealed = [];

  var MAX_SHOWN = 2;

  $scope.startGame = function() {
    gameService.fetchCards();
  }

  $scope.flip = function(card) {
    if ($scope._alreadyRevealed(card)) return;
    if (flipped.length === MAX_SHOWN) flipped.shift();

    flipped.push(card);

    if ($scope._match(card)) revealed.push(card.icon);
  }

  $scope._match = function(card) {
    var potentialMatch = _.findWhere(flipped, {icon: card.icon});
    if (!potentialMatch) return false;
    return potentialMatch.icon === card.icon && potentialMatch.index !== card.index;
  }

  $scope.isShown = function(card) {
    // A card should be shown if it is being flipped
    // or if its sibling has been revealed
    if ($scope._alreadyRevealed(card)) return true;
    return !!_.findWhere(flipped, card);
  }

  $scope._alreadyRevealed = function(card) {
    return revealed.indexOf(card.icon) != -1
  }

}]);