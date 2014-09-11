App.FriendListModalView = Backbone.View.extend({
  el: '#friend-search-modal',
  initialize: function() {
    console.log('New Friend List Modal View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(friend) {
    var friendView = new App.FriendView({model: friend});
    this.$el.append(friendView.$el);
    console.log(this.$el);
    console.log(friendView.$el);
  },
  addAll: function() {
    this.collection.each(function(friend) {
      this.addOne(friend);
    }, this);
  }

});
