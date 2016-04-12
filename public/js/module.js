'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/', templateUrl: '/html/home.html'})
    .state('portfolio', {url: '/portfolio', templateUrl: '/html/portfolio.html', controller: 'PortfolioCtrl'})
  $urlRouterProvider.otherwise('/');
});

app.run(function() {});
