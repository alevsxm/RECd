App.FriendCreateRequestModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Friend Request Create Model');
  },
  url: '/friend_requests'
});
