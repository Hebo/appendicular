/*global GameView:false App Backbone $ _ */
App.GamesView = Backbone.View.extend({
  template: _.template(
    '<div class="sorter">' +
      'Sort By: ' +
        '<a data-sort-prop="channels">Channels</a>' +
        ' | <a data-sort-prop="viewers">Viewers</a>' +
    '</div>'),
  className: 'games',

  events: {
    'click .sorter a': 'reSort'
  },

  initialize: function() {
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.addAll();
    return this;
  },

  addAll: function() {
    this.$('.game').remove();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(game) {
    var gameView = new App.GameView({model: game});
    this.$el.append(gameView.render().el);
  },

  reSort: function(e) {
    var property = $(e.target).data('sort-prop');
    if (!property) return;

    this.collection.comparator = function(game) {
      return -game.get(property);
    };

    this.collection.sort();
  }
});