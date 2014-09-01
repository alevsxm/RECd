App.MovieRecommendationSearchResultView = Backbone.View.extend({
  className: 'movie-recommendation-search-result',
  initialize: function() {
    console.log('New Movie Recommendation Search Result View');
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },
  template: HandlebarsTemplates['movieRecommendations/movieRecommendationSearchResult'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
