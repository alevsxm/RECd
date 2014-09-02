App.MovieRecommendationCreateModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Movie Recommendation Create Model');
  },
  url: '/movie_recommendations'
});
