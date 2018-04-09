$(document).on('click', '#comment', function() {

  $('.note-content').empty();
  $('.save-note').removeAttr('data-id');

  var thisId = $(this).attr('data-id');

  $.ajax({
    method: 'GET',
    url: '/' + thisId
  }).then(data => {

    console.log(data);

    $('.note-content').append('<h4>Notes on ' + data.artist + '</h4>');

    $('.note-content').append('<input id="title-input" name="title" value="New note">');

    $('.note-content').append('<textarea id="body-input" name="body">Thoughts on this artist</textarea>');

    $('.save-note').attr('data-id="' + data._id + '"');

    // If there's a note in the headline already
    if (data.note) {

      $('#title-input').append('<h5>' + data.note.title + '</h5>');

      $('#body-input').val(data.note.body);
    }
  });

});

$(document).on('click', '#save-note', function() {

  var thisId = $(this).attr('data-id');

  $.ajax({
    method: 'POST',
    url: '/' + thisId,
    data: {

      title: $('#title-input').val(),
      body: $('#body-input').val()
    }
  })
    .then(function(data) {
      $('#notes').empty();
    });

  $('#titleinput').val('');
  $('#bodyinput').val('');

});
