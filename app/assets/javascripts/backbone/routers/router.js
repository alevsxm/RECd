App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'books/?=:searchTerm': 'bookSearchResults',
    'movies/?=:searchTerm': 'movieSearchResults',
    'tv/?=:searchTerm': 'tvSearchResults'
  },
  initialize: function() {
    console.log('New Router!');
    App.Collections.bookRecommendationSearchResults = new App.BookRecommendationSearchResultCollection();
    App.Views.bookRecommendationSearchResultListView = new App.BookRecommendationSearchResultListView({collection: App.Collections.bookRecommendationSearchResults});
    App.Collections.movieRecommendationSearchResults = new App.MovieRecommendationSearchResultCollection();
    App.Views.movieRecommendationSearchResultListView = new App.MovieRecommendationSearchResultListView({collection: App.Collections.movieRecommendationSearchResults});
    App.Collections.tvRecommendationSearchResults = new App.TvRecommendationSearchResultCollection();
    App.Views.tvRecommendationSearchResultListView = new App.TvRecommendationSearchResultListView({collection: App.Collections.tvRecommendationSearchResults});
    App.Views.searchFormView = new App.SearchFormView({collection: App.Collections.bookRecommendationSearchResults});
  },

  index: function() {
    console.log('Fired Index!');
  },

  bookSearchResults: function(searchTerm) {
    console.log('Fired Search!');
    console.log('Looking for ' + searchTerm);
    App.Collections.bookRecommendationSearchResults.fetch({reset: true, data: {title: searchTerm}});
  },

  movieSearchResults: function(searchTerm) {
    console.log('Fired Search!');
    console.log('Looking for ' + searchTerm);
    App.Collections.movieRecommendationSearchResults.fetch({reset: true, data: {title: searchTerm}});
  },

  tvSearchResults: function(searchTerm) {
    console.log('Fired Search!');
    console.log('Looking for ' + searchTerm);
    App.Collections.tvRecommendationSearchResults.fetch({reset: true, data: {title: searchTerm}});
  }


})
