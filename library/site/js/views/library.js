// site/js/views/library.js

var app = app || {};

$(function() {
  app.LibraryView = Backbone.View.extend({
    el: '#books',

    initialize: function(  ) {
      this.collection = new app.Library();
      this.collection.fetch({reset: true});
      this.render();
      this.listenTo(this.collection, 'add', this.renderBook); // TODO, only add the book to collection and render if it really got added to database.
      this.listenTo(this.collection, 'reset', this.render);
    },

    render: function() {
      this.collection.each(function( item ) {
        this.renderBook( item );
      }, this );
    },

    // Render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
      var bookView = new app.BookView({
        model: item
      });
      this.$el.append( bookView.render().el );
    },

    events:{
      'click #add':'addBook'
    },

    addBook: function( e ) {
      e.preventDefault();
      var formData = {};
      var hasData = false;
      $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
        if( $(el).val() != '' ) 
        {
          if(el.id === 'keywords') {
            formData[el.id] = [];
            _.each($(el).val().split(' '), function( keyword ) {
              formData[el.id].push({'keyword': keyword});
            });
          } else if (el.id === 'releaseDate') {
            formData[el.id] = $('#releaseDate').datepicker('getDate').getTime();
          } else {
            formData[el.id] = $(el).val();
          }
          hasData = true;
        }
        // Clear input field value
        $(el).val('');
      });
      if(hasData) {
        this.collection.create(formData, {wait:true}); //wait:true makes it not add to collection if item is not added to database
      }
    }
  });
});













