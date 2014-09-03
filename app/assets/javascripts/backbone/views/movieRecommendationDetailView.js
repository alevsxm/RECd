App.MovieRecommendationDetailView = Backbone.View.extend({
  el: '#rec-detail-modal',
  className: 'movie-recommendation-detail',
  initialize: function() {
    console.log('New Movie Recommendation Detail View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click button.finished': 'showRating',
    'click button.submit-finished': 'completeRec',
    'click button.reject': 'deleteRec',
    'click span.close': 'closeModal'
  },
  
  template: HandlebarsTemplates['movieRecommendations/movieRecommendationPending'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  showRating: function() {
    console.log('fade in yo!');
    $('div.finish').fadeIn();
  },

  completeRec: function() {
    console.log('finishing yo!');
    this.model.set({recommendee_rating: this.$el.find('input').val()});
    this.model.complete();
    this.$el.hide();
  },

  deleteRec: function() {
    console.log('deleting this horrible rec');
    this.model.reject();
    this.$el.hide();
  },

  closeModal: function() {
    console.log('closing bro!');
    this.$el.hide();
  }

});
