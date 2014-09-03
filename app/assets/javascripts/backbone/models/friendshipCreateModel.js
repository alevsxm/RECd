App.FriendshipCreateModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Friendship Create Model');
  },
  url: '/friend_requests/accept'
});
