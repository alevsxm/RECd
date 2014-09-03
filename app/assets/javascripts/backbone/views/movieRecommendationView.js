App.MovieRecommendationView = Backbone.View.extend({
  className: 'movie-recommendation',
  initialize: function() {
    console.log('New Movie Recommendation View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click div': 'showMovieRecommendation'
  },
  template: HandlebarsTemplates['movieRecommendations/movieRecommendationBrief'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  showMovieRecommendation: function() {
    console.log("Show me the Modal!");
    App.movieRecommendationDetailView = new App.MovieRecommendationDetailView({model: this.model});
    $('#rec-detail-modal').show();
  }


});
