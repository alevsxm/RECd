App.FriendCollection = Backbone.Collection.extend({
  model: App.FriendModel,
  url: 'users/friends',
  initialize: function() {
    console.log('New Friend Collection');
  }
})
