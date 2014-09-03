App.BookRecommendationDetailView = Backbone.View.extend({
  className: 'book-recommendation-detail',
  initialize: function() {
    console.log('New Book Recommendation Detail View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  template: HandlebarsTemplates['bookRecommendations/bookRecommendationPending'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
});
