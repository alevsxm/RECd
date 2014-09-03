App.MovieRecommendationModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Movie Recommendation Model');
  },
  urlRoot: '/movie_recommendations',

  complete: function() {
    $.ajax({
      type: "PUT",
      url: "movie_recommendations",
      data: {movie_recommendation: {
        finished: true,
        recommendee_rating: this.get("recommendee_rating"),
        id: this.get("id")
      }}
    });
  }
});
