App.BookRecommendationDetailView = Backbone.View.extend({
  el: '#rec-detail-modal',
  className: 'book-recommendation-detail',
  initialize: function() {
    console.log('New Book Recommendation Detail View');
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  events: {
    'click button.finished': 'showRating',
    'click button.submit-finished': 'completeRec',
    'click button.reject': 'deleteRec',
    'click button.close': 'closeModal'
  },

  template: HandlebarsTemplates['bookRecommendations/bookRecommendationPending'],
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  showRating: function() {
    console.log('fade in yo!');
    $('div.finish').fadeIn();
  },

  completeRec: function() {
    console.log('finishing yo!');
    this.model.set({recommendee_rating: this.$el.find('input').val(),
                    finished: true});
    this.model.save();
    // this.model.complete();
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
