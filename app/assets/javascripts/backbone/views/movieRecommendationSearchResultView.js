App.MovieRecommendationSearchResultView = Backbone.View.extend({
  className: 'movie-recommendation-search-result',
  initialize: function() {
    console.log('New Movie Recommendation Search Result View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click button#recommend': 'recommendMovie',
    'click button.select-friend': 'recommendationRequest'
  },
  template: HandlebarsTemplates['movieRecommendations/movieRecommendationSearchResult'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  recommendMovie: function(){
    App.Collections.friends = new App.FriendCollection();
    App.friendListView = new App.FriendListView({collection: App.Collections.friends});
    App.Collections.friends.fetch({reset: true});
    this.$el.append(App.friendListView.$el.show());

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
    App.friendListView.$el.html('');
  }
});
