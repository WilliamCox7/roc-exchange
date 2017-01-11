angular.module('rocExchange', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '../views/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '../views/login.html'
    });

});
