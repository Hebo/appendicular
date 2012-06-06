/*global GameView:false Backbone:false*/
var GamesView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  render: function() {
    this.addAll();
    return this;
  },

  addAll: function() {
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(game) {
    var gameView = new GameView({model: game});
    this.$el.append(gameView.render().el);
  }
});