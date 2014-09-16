App.TvRecommendationSearchResultView = Backbone.View.extend({
  className: 'tv-recommendation-search-result',
  initialize: function() {
    console.log('New TV Recommendation Search Result View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click button#recommend': 'recommendMovie',
    'click button.select-friend': 'recommendationRequest',
    'click button.close': 'closeModal'
  },

  template: HandlebarsTemplates['movieRecommendations/movieRecommendationSearchResult'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  recommendMovie: function(ev){
    App.Collections.friends = new App.FriendCollection();
    App.friendListModalView = new App.FriendListModalView({collection: App.Collections.friends});
    App.Collections.friends.fetch({reset: true});
    $(ev.target).parent().parent().find('.friend-search-modal').show();
  },

  recommendationRequest: function(ev){
    var id = $(ev.target).parent().attr('data-id');
    var movieData = this.model.toJSON();
    App.movieRecommendationCreateModel = new App.MovieRecommendationCreateModel();
    App.movieRecommendationCreateModel.set({movie_recommendation: {
                                           recommendee_id: id,
                                           title: movieData["title"],
                                           director: movieData["director"],
                                           cast: movieData["cast"].join(', '),
                                           year_released: movieData["year_released"],
                                           plot_summary: movieData["plot_summary"],
                                           poster_url: movieData["poster_url"],
                                           rating: movieData["rating"],
                                           media_type: movieData["media_type"]}});
    App.movieRecommendationCreateModel.save();
    App.friendListModalView.$el.html('').hide();
    // App.friendListView = undefined;
  },

  closeModal: function(){
    App.friendListModalView.$el.hide();
    App.friendListModalView.$el.find('.friend').remove();
  }
});
