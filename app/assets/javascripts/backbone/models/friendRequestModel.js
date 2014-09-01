App.FriendRequestModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Friend Request Model');
  },
  urlRoot: '/friend_requests'
});
