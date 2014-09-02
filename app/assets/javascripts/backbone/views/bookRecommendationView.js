App.BookRecommendationView = Backbone.View.extend({
  className: 'book-recommendation',
  initialize: function() {
    console.log('New Book Recommendation View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  // events: {
  //   'click #book-recommendation'
  // },
  template: HandlebarsTemplates['bookRecommendations/bookRecommendationBrief'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
