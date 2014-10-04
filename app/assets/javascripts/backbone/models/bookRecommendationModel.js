App.BookRecommendationModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Book Recommendation Model');
  },
  urlRoot: '/book_recommendations',

  // complete: function() {
  //   $.ajax({
  //     type: "PUT",
  //     url: "book_recommendations",
  //     data: {book_recommendation: {
  //       finished: true,
  //       recommendee_rating: this.get("recommendee_rating"),
  //       id: this.get("id")
  //     }}
  //   });
  // },

  reject: function() {
    this.destroy();

    // $.ajax({
    //   type: "DELETE",
    //   url: "book_recommendations",
    //   data: {id: this.get("id")}
    // });
  }

});
