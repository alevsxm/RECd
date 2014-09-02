App.BookRecommendationCreateModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Book Recommendation Create Model');
  },
  url: '/book_recommendations'
});
