// site/js/models/book.js

var app = app || {};

app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'No title',
    author: 'Unknown',
    releaseDate: '01/01/2014', // this was originally set to 'unknown', but throws and error if book is submitted without a date.
    keywords: 'None'
  },

  parse: function( response ) {
  	response.id = response._id;
  	return response;
  }
});
