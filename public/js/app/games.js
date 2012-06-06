/*global Backbone:false, App Game $*/
App.Games = Backbone.Collection.extend({
  model: App.Game,
  idAttribute: 'name',
  url: function() {
    return '/games?' + $.param({
      limit: this.limit,
      offset: (this.page - 1) * this.limit
    });
  },

  limit: 20,
  page: 1,

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