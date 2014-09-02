App.BookRecommendationCollection = Backbone.Collection.extend({
  model: App.BookRecommendationModel,
  url: '/book_recommendations',
  initialize: function() {
    console.log('New Book Recommendation Collection');
  }
});
