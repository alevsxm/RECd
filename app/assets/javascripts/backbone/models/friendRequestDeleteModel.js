App.FriendRequestDeleteModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Friend Request Delete Model');
  },
  url: '/friend_requests/reject'
});
