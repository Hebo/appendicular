/*jshint jquery:true browser:true*/
/*global Backbone:false, Game:false Games:false GamesView:false*/
var Directory = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "games/:id": "show"
  },

  initialize: function() {
    this.games = new Games();
    this.gamesView = new GamesView({collection: this.games});
    this.gamesView.render();
  },

  index: function() {
    console.log('index!')
    $('#app').html(this.gamesView.el);
    Directory.games.fetch();
  },

  start: function() {
    Backbone.history.start({pushState: true, root: "/app/"});
  },

  show: function(name) {
    console.log('results for game' + name);
    // this.todoItems.focusOnTodoItem(id);
  }
}))();

$(function() {
  Directory.start();

  var gs = [
    new Game({viewers: 100, name: 'Diablo'}),
    new Game({viewers: 1001, name: 'Dota 2'})
  ];

  Directory.games.reset(gs);
  console.log('loaded')
  
});

