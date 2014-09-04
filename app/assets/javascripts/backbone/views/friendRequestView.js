App.FriendRequestView = Backbone.View.extend({
  className: 'friend-request',
  initialize: function() {
    console.log('New Friend Request View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click button.add-friend': 'addFriend',
    'click button.delete-request': 'deleteRequest'
  },

  template: HandlebarsTemplates['friends/friendRequest'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  addFriend: function() {
    console.log('Yess add me !!!');
    var friendshipData = this.model.toJSON();
    App.friendshipCreateModel = new App.FriendshipCreateModel();
    App.friendshipCreateModel.set({friend_request: {
                                   id: friendshipData["id"],
                                   user_id: friendshipData["user_id"],
                                   sender_id: friendshipData["sender_id"]}});
    App.friendshipCreateModel.save();
    this.$el.html('');

  },

  deleteRequest: function() {
    console.log('NOOO your denying me??');
    this.model.reject();
    this.$el.html('');
  }

});
