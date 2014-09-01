App.BookRecommendationSearchResultView = Backbone.View.extend({
  className: 'book-recommendation-search-result',
  initialize: function() {
    console.log('New Book Recommendation Search Result View');
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },
  template: HandlebarsTemplates['bookRecommendations/bookRecommendationSearchResult'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
