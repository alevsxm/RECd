App.FriendListView = Backbone.View.extend({
  // el: '#search-results',  DO I SPECIFY AN EL HERE??
  initialize: function() {
    console.log('New Friend List View')
    this.listenTo(this.collection, 'reset', this.addAll)
  },
  addOne: function(friend) {
    var friendView = new App.FriendView({model: friend});
    this.$el.append(friendView.$el);
    console.log(this.$el);
    console.log(friendView.$el);
  },
  addAll: function() {
    console.log('reset event');
    this.collection.each(function(friend) {
      this.addOne(friend);
    }, this)
  }

})
