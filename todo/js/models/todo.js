// js/models/todo.js

var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title', 'order', and 'completed' attributes.

app.Todo = Backbone.Model.extend({

  // Default attributes to ensure thae each todo created has a 'title' and 'completed' keys.
  defaults: {
    title: '',
    completed: false
  },

  // Toggle the 'completed' state of this todo item.
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }

});