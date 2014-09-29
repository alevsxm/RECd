App.MovieRecommendationListView = Backbone.View.extend({
  el: '#movie-recommendations',
  initialize: function() {
    console.log('New Movie Recommendation List View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(movieRecommendation) {
    var movieRecommendationView = new App.MovieRecommendationView({model: movieRecommendation});
    this.$el.append(movieRecommendationView.$el);
  },
  addAll: function() {
    this.collection.each(function(movieRecommendation) {
      this.addOne(movieRecommendation);
    }, this);
  }
});
