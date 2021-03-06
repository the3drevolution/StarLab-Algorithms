'use strict';

angular.module('starlabApp', ['ui.router', 'ngResource', 'starlab.controllers', 'starlab.services'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  //route for the home page
  .state('starlab', {
    url: '/',
    views: {
      'header': {
        templateUrl: 'views/header.html'
      },
      'content': {
        templateUrl: 'views/home.html',
        controller: 'IndexController'
      }
    }
  })

//route for the Birad Page
  .state('starlab.birad', {
    url: 'birad',
    views: {
      'content@': {
        templateUrl: 'views/birad.html',
        controller: 'BiradController'
      }
    }
  })

  //route for birad training page
  .state('starlab.birad.train', {
    url: '/train',
    views: {
      'content@': {
        templateUrl: 'views/birad_train.html',
        controller: 'BiradTrainController'
      }
    }
  })

  //route for birad sample Page
  .state('starlab.birad.sample', {
    url: '/sample',
    views: {
      'content@': {
        templateUrl: 'views/birad_sample.html',
        controller: 'BiradSampleController'
      }
    }
  })

  //route for the biradK Page
  .state('starlab.biradk', {
    url: 'biradk',
    views: {
      'content@': {
        templateUrl: 'views/biradk.html',
        controller: 'BiradkController'
      }
    }
  })

  //route for the sird page
  .state('starlab.sird', {
    url: 'sird',
    views: {
      'content@': {
        templateUrl: 'views/sird.html',
        controller: 'SirdController'
      }
    }
  })

  //route for the sird-run page
  .state('starlab.bird.run', {
    url: '/run',
    views: {
      'content@': {
        templateUrl: 'views/bird-run.html',
        controller: 'BirdRunController'
      }
    }
  })

  //route for the bird page
  .state('starlab.bird', {
    url: 'bird',
    views: {
      'content@': {
        templateUrl: 'views/bird.html',
        controller: 'BirdController'
      }
    }
  })

  //route for the contact page
  .state('starlab.contact', {
    url: 'contact',
    views: {
      'content@': {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      }
    }
  })

  //route for the team page
  .state('starlab.team', {
    url: 'team',
    views: {
      'content@': {
        templateUrl: 'views/team.html',
        controller: 'TeamController'
      }
    }
  })

 // route for the about page
 .state('starlab.about', {
   url: 'about',
   views: {
     'content@': {
       templateUrl: 'views/about.html',
       controller: 'AboutController'
     }
   }
 })

 // route for the publications page
 .state('starlab.publications', {
   url: 'publications',
   views: {
     'content@': {
       templateUrl: 'views/publications.html',
       controller: 'PublicationsController'
     }
   }
 });

  $urlRouterProvider.otherwise('/');
});
