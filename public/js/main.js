/*jshint jquery:true browser:true*/
/*global Backbone:false, Game:false Games:false GamesView:false*/

$(function() {
  App.directory = new App.Directory();
  Backbone.history.start({pushState: true, root: "/app/"});

  var gs = [
    new App.Game({viewers: 100, name: 'Diablo'}),
    new App.Game({viewers: 1001, name: 'Dota 2'})
  ];

  App.directory.games.reset(gs);

  console.log('loaded')
      
});

