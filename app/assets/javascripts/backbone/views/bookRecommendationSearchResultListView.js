App.BookRecommendationSearchResultListView = Backbone.View.extend({
  el: '#search-results',
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(bookRecommendationSearchResult) {
    var bookRecommendationSearchResultView = new App.BookRecommendationSearchResultView({model: bookRecommendationSearchResult});
    this.$el.append(bookRecommendationSearchResultView.$el);
  },
  addAll: function() {
    this.collection.each(function(bookRecommendationSearchResult) {
      this.addOne(bookRecommendationSearchResult);
    }, this);
  }

});
