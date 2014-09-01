App.MovieRecommendationSearchResultCollection = Backbone.Collection.extend({
  model: App.MovieRecommendationSearchResultModel,
  url: 'movie_recommendations/movie_search',
  initialize: function() {
    console.log('New Movie Recommendation Search Result Collection');
  }
})
