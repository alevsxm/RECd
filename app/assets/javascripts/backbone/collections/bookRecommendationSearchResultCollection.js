App.BookRecommendationSearchResultCollection = Backbone.Collection.extend({
  model: App.BookRecommendationSearchResultModel,
  url: 'book_recommendations/search',
  initialize: function() {
    console.log('New Book Recommendation Search Result Collection');
  }
})
