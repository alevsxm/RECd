App.Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    '_=_': 'index',
    'search': 'search',
    'friends': 'showFriends',
    'books/?=:searchTerm': 'bookSearchResults',
    'movies/?=:searchTerm': 'movieSearchResults',
    'tv/?=:searchTerm': 'tvSearchResults',
    'find-friends': 'friendSearch',
    'find-friends/?=:searchTerm': 'friendSearchResults',
    'friend-requests': 'showFriendRequests'
  },
  initialize: function() {
    console.log('New Router!');

    App.Collections.bookRecommendationSearchResults = new App.BookRecommendationSearchResultCollection();
    App.Views.bookRecommendationSearchResultListView = new App.BookRecommendationSearchResultListView({collection: App.Collections.bookRecommendationSearchResults});

    App.Collections.movieRecommendationSearchResults = new App.MovieRecommendationSearchResultCollection();
    App.Views.movieRecommendationSearchResultListView = new App.MovieRecommendationSearchResultListView({collection: App.Collections.movieRecommendationSearchResults});

    App.Collections.tvRecommendationSearchResults = new App.TvRecommendationSearchResultCollection();
    App.Views.tvRecommendationSearchResultListView = new App.TvRecommendationSearchResultListView({collection: App.Collections.tvRecommendationSearchResults});

    App.Collections.bookRecommendations = new App.BookRecommendationCollection();
    App.Views.bookRecommendationListView = new App.BookRecommendationListView({collection: App.Collections.bookRecommendations});

    App.Collections.movieRecommendations = new App.MovieRecommendationCollection();
    App.Views.movieRecommendationListView = new App.MovieRecommendationListView({collection: App.Collections.movieRecommendations});

    App.Collections.friends = new App.FriendCollection();
    App.Views.friendListView = new App.FriendListView({collection: App.Collections.friends});

    App.Collections.potentialFriend = new App.PotentialFriendCollection();
    App.Views.potentialFriendListView = new App.PotentialFriendListView({collection: App.Collections.potentialFriend});

    App.Collections.friendRequests = new App.FriendRequestCollection();
    App.Views.friendRequestListView = new App.FriendRequestListView({collection: App.Collections.friendRequests});


    App.Views.searchFormView = new App.SearchFormView({collection: App.Collections.bookRecommendationSearchResults});

    App.Views.friendSearchFormView = new App.FriendSearchFormView({collection: App.Collections.potentialFriend});
  },

  index: function() {
    console.log('Fired Index!');
    $("div#container").children().hide();
    $("div#book-recommendations").show();
    $("div#movie-recommendations").show();
    App.Collections.bookRecommendations.fetch({reset: true});
    App.Collections.movieRecommendations.fetch({reset: true});
  },

  showFriends: function() {
    console.log('Fired Friends!!!');
    $("div#container").children().hide();
    $("div#friend-requests").find(('.friend-request')).remove();
    $("div#friends").show();
    App.Collections.friends.fetch({reset: true});
  },

  search: function() {
    console.log('Fired Search!');
    $("div#container").children().hide();
    $("div#friends").find(('.friend')).remove();
    $("div#friend-requests").find(('.friend-request')).remove();
    $("div#search-input").show();
    $("div#search-results").show();
  },

  bookSearchResults: function(searchTerm) {
    $("div#container").children().hide();
    $("div#search-input").show();
    $("div#search-results").html('').show();
    console.log('Looking for ' + searchTerm);
    App.Collections.bookRecommendationSearchResults.fetch({reset: true, data: {title: searchTerm}});
  },

  movieSearchResults: function(searchTerm) {
    $("div#container").children().hide();
    $("div#search-input").show();
    $("div#search-results").html('').show();
    console.log('Looking for ' + searchTerm);
    App.Collections.movieRecommendationSearchResults.fetch({reset: true, data: {title: searchTerm}});
  },

  tvSearchResults: function(searchTerm) {
    $("div#container").children().hide();
    $("div#search-input").show();
    $("div#search-results").html('').show();
    console.log('Looking for ' + searchTerm);
    App.Collections.tvRecommendationSearchResults.fetch({reset: true, data: {title: searchTerm}});
  },

  friendSearch: function() {
    console.log('Find Friends!');
    $("div#container").children().hide();
    $("div#friends").find(('.friend')).remove();
    $("div#friend-requests").find(('.friend-request')).remove();
    $("div#friend-search-input").show();
    $("div#friend-search-results").show();
  },

  friendSearchResults: function(searchTerm) {
    console.log('Looking for ' + searchTerm);
    App.Collections.potentialFriend.fetch({reset: true, data: {first_name: searchTerm}});
  },

  showFriendRequests: function() {
    console.log("Show me those friend requests!!");
    $("div#container").children().hide();
    $("div#friends").find(('.friend')).remove();
    $("div#friend-requests").show();
    App.Collections.friendRequests.fetch({reset: true});
  }


});
