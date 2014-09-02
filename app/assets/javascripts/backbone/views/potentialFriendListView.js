App.PotentialFriendListView = Backbone.View.extend({
  el: '#search-results'
  initialize: function() {
    console.log('New Potential Friend List View')
    this.listenTo(this.collection, 'reset', this.addAll)
  },
  addOne: function(potentialFriend) {
    var potentialFriendView = new App.PotentialFriendView({model: potentialFriend});
    this.$el.append(friendView.$el);
    console.log(this.$el);
    console.log(potentialFriendView.$el);
  },
  addAll: function() {
    this.collection.each(function(potentialFriend) {
      this.addOne(potentialFriend);
    }, this)
  }

})
