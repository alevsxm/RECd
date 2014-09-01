App.friendRequestCollection = Backbone.Collection.extend({
  model: App.FriendRequestModel,
  url: 'friend_requests/index',
  initialize: function() {
    console.log('New Friend Request Collection');
  }
})
