// site/js/views/book.js

var app = app || {};

$(function() {
  app.BookView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $('#bookTemplate').html() ),

    render: function() {
      // template is a function that takes a JSON object and returns HTML
      this.$el.html( this.template( this.model.toJSON() ) );

      return this;
    },

    events: {
      'click .delete': 'deleteBook'
    },

    deleteBook: function() {
      // Delete model
      this.model.destroy();

      // Delete view
      this.remove();
    }

  });
});
