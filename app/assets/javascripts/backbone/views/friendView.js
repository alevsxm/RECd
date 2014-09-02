App.FriendView = Backbone.View.extend({
  className: 'friend',
  initialize: function() {
    console.log('New Friend View');
    this.listenTo(this.model, 'change', this.render)
    this.render();
  },
  template: HandlebarsTemplates['friends/friend'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }
})
