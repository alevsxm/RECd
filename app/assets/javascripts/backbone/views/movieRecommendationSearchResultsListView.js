App.MovieRecommendationSearchResultListView = Backbone.View.extend({
  el: '#search-results',
  initialize: function() {
    console.log('New Movie Recommendation Search Result List View')
    this.listenTo(this.collection, 'reset', this.addAll)
  },
  addOne: function(movieRecommendationSearchResult) {
    var movieRecommendationSearchResultView = new App.MovieRecommendationSearchResultView({model: movieRecommendationSearchResult});
    this.$el.append(movieRecommendationSearchResultView.$el);
    console.log(this.$el);
    console.log(movieRecommendationSearchResultView.$el);
  },
  addAll: function() {
    this.collection.each(function(movieRecommendationSearchResult) {
      this.addOne(movieRecommendationSearchResult);
    }, this)
  }

})
