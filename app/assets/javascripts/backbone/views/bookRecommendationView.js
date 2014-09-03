App.BookRecommendationView = Backbone.View.extend({
  className: 'book-recommendation',
  initialize: function() {
    console.log('New Book Recommendation View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click div': 'showBookRecommendation'
  },

  template: HandlebarsTemplates['bookRecommendations/bookRecommendationBrief'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  showBookRecommendation: function() {
    console.log("Show me the Modal!");
    App.bookRecommendationDetailView = new App.BookRecommendationDetailView({model: this.model});
    $('#rec-detail-modal').show();
  }

});
