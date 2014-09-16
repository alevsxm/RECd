App.FriendRecSelectView = Backbone.View.extend({
  className: 'friend',
  initialize: function() {
    console.log('New Friend Rec Select View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  template: HandlebarsTemplates['friends/friendRecSelect'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

});
