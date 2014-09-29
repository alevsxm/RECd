App.BookRecommendationListView = Backbone.View.extend({
  el: '#book-recommendations',
  initialize: function() {
    console.log('New Book Recommendation List View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(bookRecommendation) {
    var bookRecommendationView = new App.BookRecommendationView({model: bookRecommendation});
    this.$el.append(bookRecommendationView.$el);
  },
  addAll: function() {
    this.collection.each(function(bookRecommendation) {
      this.addOne(bookRecommendation);
    }, this);
  }
});
