App.FriendSearchFormView = Backbone.View.extend({
  el: '#friend-search-input',
  initialize: function(){
    console.log('New Friend Search Form View');
    this.render();
  },
  template: HandlebarsTemplates['friendSearchForm'],
  render: function(){
    this.$el.html(this.template());
  },

  events: {
    'click button.friend-search-button': 'generateFriendSearch'
  },

  generateFriendSearch: function() {
    console.log("Find me some friends dog!");
    var searchTerm = this.$('input').val();
    App.router.navigate('find-friends/?=' + searchTerm, {trigger: true});
  }
});
