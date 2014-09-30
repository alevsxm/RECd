App.NoBookRecommendationView = Backbone.View.extend({
  className: 'no-recommendations',
  initialize: function() {
    this.render();
  },

  template: HandlebarsTemplates['bookRecommendations/noBookRecommendation'],
  render: function(){
    this.$el.html(this.template());
  }
});
