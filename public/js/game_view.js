/*global Backbone:false Game:false _ $*/
window.GameView = Backbone.View.extend({
  template: _.template(
    '<a href="games/<%= name %>">' +
      '<img src="http://static-cdn.jtvnw.net/ttv-boxart/<%= name %>.jpg"/></a> Viewers: <%= viewers %>'),

  className: 'game',

  events: {
    'click a': 'navigate'
  },

  initialize: function() {
    this.model.on('change', this.render, this);
    this.model.on('destroy hide', this.remove, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$('img').error(function(e) {
      $(this).attr('src', 'http://static-cdn.jtvnw.net/ttv-boxart/404_boxart.png');
    });
    return this;
  },

  remove: function() {
    this.$el.remove();
  },

  navigate: function(e) {
    e.preventDefault();
    Directory.navigate($(e.target).parent('a').attr('href'), {trigger: true});
  }
});