App.MovieRecommendationModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Book Recommendation Model');
  },
  urlRoot: '/book_recommendations'
});
