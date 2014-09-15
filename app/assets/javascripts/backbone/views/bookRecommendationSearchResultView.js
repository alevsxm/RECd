App.BookRecommendationSearchResultView = Backbone.View.extend({
  className: 'book-recommendation-search-result',
  initialize: function() {
    console.log('New Book Recommendation Search Result View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click button#recommend': 'recommendBook',
    'click button.select-friend': 'recommendationRequest',
    'click button.close': 'closeModal'
  },
  template: HandlebarsTemplates['bookRecommendations/bookRecommendationSearchResult'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  recommendBook: function(ev){
    App.Collections.friends = new App.FriendCollection();
    App.friendListModalView = new App.FriendListModalView({collection: App.Collections.friends});
    console.log("New Friend List MMModal!");
    App.Collections.friends.fetch({reset: true});
    $(ev.target).parent().parent().find('.friend-search-modal').show();
    // App.friendListModalView.$el.show();

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
    App.friendListModalView.$el.html('').hide();
  },

  closeModal: function(){
    App.friendListModalView.$el.hide();
    // $('#friend-search-modal').html('');
  }
})
