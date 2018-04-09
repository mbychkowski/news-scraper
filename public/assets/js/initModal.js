$(function() {

  //initialize all modals
  $('.modal').modal({
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    }
  });

  //or by click on trigger
  $('.trigger-modal').modal();

});
