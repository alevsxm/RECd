App.MovieRecommendationCollection = Backbone.Collection.extend({
  model: App.MovieRecommendationModel,
  url: 'movie_recommendations/index',
  initialize: function() {
    console.log('New Movie Recommendation Collection');
  }
})
