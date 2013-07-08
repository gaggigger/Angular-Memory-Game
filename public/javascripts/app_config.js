var app = angular.module('App', ['lodash']);

var lodash = angular.module('lodash', []);
lodash.factory('_', function() { return window._ });