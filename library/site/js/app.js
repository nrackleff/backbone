// site/js/app.js

var app = app || {};

$(function() {
  var books = [
    { title: 'A Book', author: 'A Person', releaseDate: '2010', keywords: 'Some Words'},
    { title: 'Star Trek', author: 'A Geek', releaseDate: '2014', keywords: 'Some Words'},
    { title: 'Catcher in the Rye', author: 'A Recluse', releaseDate: '2010', keywords: 'Some Words'},
    { title: 'Another Book', author: 'A Person', releaseDate: '2010', keywords: 'Some Words'},
    { title: 'Yet Another Book', author: 'A Person', releaseDate: '2010', keywords: 'Some Words'},
  ];

  new app.LibraryView( books );
});
