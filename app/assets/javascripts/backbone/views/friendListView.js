App.FriendListView = Backbone.View.extend({
  el: '#friends',
  initialize: function() {
    console.log('New Friend List View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(friend) {
    var friendView = new App.FriendView({model: friend});
    this.$el.append(friendView.$el);
  },
  addAll: function() {
    if (this.collection.length > 0) {
      this.collection.each(function(friend) {
        this.addOne(friend);
      }, this);
    } else {
      var noFriendView = new App.NoFriendView();
      this.$el.append(noFriendView.$el);
    }
  }

});
