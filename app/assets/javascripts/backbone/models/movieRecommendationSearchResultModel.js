App.MovieRecommendationSearchResultModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Movie Recommendation Search Result Model');
  },
  urlRoot: '/movie_recommendations'
});
