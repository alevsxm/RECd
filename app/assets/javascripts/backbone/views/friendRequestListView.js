App.FriendRequestListView = Backbone.View.extend({
  el: '#friend-requests',
  initialize: function() {
    console.log('New Friend Request List View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(friendRequest) {
    var friendRequestView = new App.FriendRequestView({model: friendRequest});
    this.$el.append(friendRequestView.$el);
    console.log(this.$el);
    console.log(friendRequestView.$el);
  },
  addAll: function() {
    if (this.collection.length > 0) {
      this.collection.each(function(friendRequest) {
        this.addOne(friendRequest);
      }, this);
    } else {
      var noFriendRequestView = new App.NoFriendRequestView();
      this.$el.append(noFriendRequestView.$el);
    }
  }

});
