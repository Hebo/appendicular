/*global Backbone:false, Game:false*/
window.Games = Backbone.Collection.extend({
  model: Game,
  url: '/games',

  initialize: function() {
    this.on('remove', this.hideModel, this);
  },

  hideModel: function(model) {
    model.trigger('hide');
  },

  comparator: function(game) {
    return -game.get('viewers');
  }
});