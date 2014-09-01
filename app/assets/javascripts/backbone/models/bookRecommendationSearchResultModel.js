App.BookRecommendationSearchResultModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Book Recommendation Search Result Model');
  },
  urlRoot: '/book_recommendations'
});
