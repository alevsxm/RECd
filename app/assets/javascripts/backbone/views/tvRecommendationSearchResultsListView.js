App.TvRecommendationSearchResultListView = Backbone.View.extend({
  el: '#search-results',
  initialize: function() {
    console.log('New Tv Recommendation Search Result List View')
    this.listenTo(this.collection, 'reset', this.addAll)
  },
  addOne: function(tvRecommendationSearchResult) {
    var tvRecommendationSearchResultView = new App.TvRecommendationSearchResultView({model: tvRecommendationSearchResult});
    this.$el.append(tvRecommendationSearchResultView.$el)
    console.log(this.$el);
    console.log(tvRecommendationSearchResultView.$el);
  },
  addAll: function() {
    this.collection.each(function(tvRecommendationSearchResult) {
      this.addOne(tvRecommendationSearchResult);
    }, this)
  }

})
