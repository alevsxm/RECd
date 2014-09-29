App.BookRecommendationView = Backbone.View.extend({
  className: 'book-recommendation',
  initialize: function() {
    console.log('New Book Recommendation View');
    this.listenTo(this.model, 'change', this.remove);
    this.listenTo(this.model, 'destroy', this.remove);
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
  },

  remove: function() {
    this.$el.fadeOut(600, function() {
      this.$el.remove();
    });
  }

});
