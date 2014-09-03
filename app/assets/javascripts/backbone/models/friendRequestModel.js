App.FriendRequestModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Friend Request Model');
  },
  urlRoot: '/friend_requests',

  reject: function() {
    $.ajax({
      type: "DELETE",
      url: "friend_requests/reject",
      data: {friend_request: {id: this.get("id")}}
    });
  }
});
