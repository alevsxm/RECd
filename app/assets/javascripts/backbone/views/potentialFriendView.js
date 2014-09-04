App.PotentialFriendView = Backbone.View.extend({
  className: 'recd-user',
  initialize: function() {
    console.log('New Potential Friend View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'click button.add-friend': 'sendFriendRequest'
  },
  template: HandlebarsTemplates['friends/potentialFriend'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },
  sendFriendRequest: function(ev){
    var id = $(ev.target).parent().attr('data-id');
    var userData = this.model.toJSON();
    App.friendRequestCreateModel = new App.FriendCreateRequestModel();
    App.friendRequestCreateModel.set({friend_request: {user_id: userData["id"]}});
    App.friendRequestCreateModel.save();
    this.$el.html('');
  }
});
