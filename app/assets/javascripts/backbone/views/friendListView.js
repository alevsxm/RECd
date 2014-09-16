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
    this.collection.each(function(friend) {
      this.addOne(friend);
    }, this);
  }

});
