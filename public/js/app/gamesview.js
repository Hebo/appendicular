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
    this.isLoading = false;
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);

    $(window).bind('scroll', this.checkScroll.bind(this));
  },

  loadGames: function() {
    var self = this;
    this.isLoading = true;

    this.collection.fetch({silent: false, add: true})
    .always(function() {
      self.isLoading = false;
    });
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
  },

  checkScroll: function () {
    var triggerPoint = 200; // from the bottom
    if (!this.isLoading && $(window).height() + $(window).scrollTop() >=
        $(document).height() - triggerPoint ) {
      console.log('loading next page');
      this.collection.page += 1;
      this.loadGames();
    }
  }
});