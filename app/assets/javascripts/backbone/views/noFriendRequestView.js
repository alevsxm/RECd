App.NoFriendRequestView = Backbone.View.extend({
  className: 'no-friend-requests',
  initialize: function() {
    this.render();
  },

  template: HandlebarsTemplates['friends/noFriendRequests'],
  render: function(){
    this.$el.html(this.template());
  }
});
