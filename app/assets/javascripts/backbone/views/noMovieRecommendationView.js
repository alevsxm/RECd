App.NoMovieRecommendationView = Backbone.View.extend({
  className: 'no-recommendations',
  initialize: function() {
    this.render();
  },

  template: HandlebarsTemplates['movieRecommendations/noMovieRecommendation'],
  render: function(){
    this.$el.html(this.template());
  }
});
