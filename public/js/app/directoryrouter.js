App.Directory = Backbone.Router.extend({
  routes: {
    "": "index",
    "games/:id": "show"
  },

  initialize: function() {
    this.games = new App.Games();
    this.gamesView = new App.GamesView({collection: this.games});
    this.gamesView.render();
  },

  index: function() {
    console.log('index!')
    $('#app').html(this.gamesView.el);
    this.games.fetch();
  },

  show: function(name) {
    console.log('results for game' + name);
    // this.todoItems.focusOnTodoItem(id);
  }
});