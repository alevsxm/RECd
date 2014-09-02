App.BookRecommendationSearchResultView = Backbone.View.extend({
  className: 'book-recommendation-search-result',
  initialize: function() {
    console.log('New Book Recommendation Search Result View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click button#recommend': 'recommendBook',
    'click button.select-friend': 'recommendationRequest'
  },
  template: HandlebarsTemplates['bookRecommendations/bookRecommendationSearchResult'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  recommendBook: function(){
    App.Collections.friends = new App.FriendCollection();
    App.friendListView = new App.FriendListView({collection: App.Collections.friends});
    App.Collections.friends.fetch({reset: true});
    this.$el.append(App.friendListView.$el);

  },
  recommendationRequest: function(ev){
    var id = $(ev.target).parent().attr('data-id');
    var bookData = this.model.toJSON();
    App.bookRecommendationCreateModel = new App.BookRecommendationCreateModel();
    App.bookRecommendationCreateModel.set({book_recommendation: {
                                           recommendee_id: id,
                                           title: bookData["title"],
                                           author: bookData["author"],
                                           year_published: bookData["year_published"],
                                           plot_summary: bookData["plot_summary"],
                                           cover_url: bookData["cover_url"],
                                           amazon_purchase_link: bookData["amazon_url"]}});
    App.bookRecommendationCreateModel.save();
  }
})
