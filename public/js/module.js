'use strict';

var app = angular.module('myApp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/home', templateUrl: '/html/home.html'})
    .state('about', {url: '/about', templateUrl: '/html/about.html'})
    .state('resume', {url: '/resume', templateUrl: '/html/resume.html'})
    .state('portfolio', {url: '/portfolio', templateUrl: '/html/portfolio.html', controller: 'PortfolioCtrl'})
  $urlRouterProvider.otherwise('/');
});

app.run(function() {});
