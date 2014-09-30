App.NoFriendView = Backbone.View.extend({
  className: 'no-friends',
  initialize: function() {
    this.render();
  },

  template: HandlebarsTemplates['friends/noFriends'],
  render: function(){
    this.$el.html(this.template());
  }
});
