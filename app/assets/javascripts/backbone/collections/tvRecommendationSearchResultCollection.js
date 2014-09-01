App.TvRecommendationSearchResultCollection = Backbone.Collection.extend({
  model: App.TvRecommendationSearchResultModel,
  url: 'movie_recommendations/tv_search',
  initialize: function() {
    console.log('New TV Recommendation Search Result Collection');
  }
})
