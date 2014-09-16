App.FriendListModalView = Backbone.View.extend({
  el: '.friend-search-modal',
  initialize: function() {
    console.log('New Friend List Modal View');
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(friend) {
    var friendRecSelectView = new App.FriendRecSelectView({model: friend});
    this.$el.append(friendRecSelectView.$el);
  },
  addAll: function() {
    this.collection.each(function(friend) {
      this.addOne(friend);
    }, this);
  }

});
