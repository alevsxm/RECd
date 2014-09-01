App.SearchFormView = Backbone.View.extend({
  el: '#search-input',
  initialize: function(){
    console.log('New Book Search Form View');
    this.render();
  },
  template: HandlebarsTemplates['searchForm'],
  render: function(){
    this.$el.html(this.template());
  },

  events: {
    'click button.book-search-button': 'generateBookSearch',
    'click button.movie-search-button': 'generateMovieSearch',
    'click button.tv-search-button': 'generateTvSearch'
  },

  generateBookSearch: function() {
    console.log("Generate Book Search Yo!")
    var searchTerm = this.$('input').val();
    console.log(searchTerm);
    App.router.navigate('books/?='+searchTerm);
  },

  generateMovieSearch: function() {
    console.log("Generate Movie Search Yo!")
    var searchTerm = this.$('input').val();
    console.log(searchTerm);
    App.router.navigate('movies/?='+searchTerm);
  },

  generateTvSearch: function() {
    console.log("Generate TV Search Yo!")
    var searchTerm = this.$('input').val();
    console.log(searchTerm);
    App.router.navigate('tv/?='+searchTerm);
  }

})
