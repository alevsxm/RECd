App.MovieRecommendationView = Backbone.View.extend({
  className: 'movie-recommendation',
  initialize: function() {
    console.log('New Movie Recommendation View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  // events: {
  //   'click #movie-recommendation': 'showMovieRecommendation'
  // },
  template: HandlebarsTemplates['movieRecommendations/movieRecommendationBrief'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
