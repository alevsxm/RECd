App.MovieRecommendationModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Movie Recommendation Model');
  },
  urlRoot: '/movie_recommendations'
});
