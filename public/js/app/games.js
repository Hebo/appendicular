/*global Backbone:false, App Game*/
App.Games = Backbone.Collection.extend({
  model: App.Game,
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