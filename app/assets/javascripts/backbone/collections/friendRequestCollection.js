App.FriendRequestCollection = Backbone.Collection.extend({
  model: App.FriendRequestModel,
  url: 'friend_requests',
  initialize: function() {
    console.log('New Friend Request Collection');
  }
});
