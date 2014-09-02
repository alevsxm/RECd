App.PotentialFriendCollection = Backbone.Collection.extend({
  model: App.PotentialFriendModel,
  url: 'users/search',
  initialize: function() {
    console.log('New Potential Friend Collection');
  }
})
