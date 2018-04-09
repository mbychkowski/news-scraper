$(document).on('click', '#comment', function() {

  $('.note-content').empty();
  $('.save-note').removeAttr('data-id');

  var thisId = $(this).attr('data-id');

  $.ajax({
    method: 'GET',
    url: '/' + thisId
  }).then(data => {

    $('.note-content').append('<h4>Notes on ' + data.artist + '</h4>');

    $('.note-content').append('<input id="title-input" name="title">');

    $('.note-content').append('<textarea id="body-input" name="body"></textarea>');

    $('.save-note').attr('data-id', data._id);

    // If there's a note in the headline already
    if (data.comment) {

      $('#title-input').val(data.comment.title);

      $('#body-input').val(data.comment.body);
    }
  });

});

$(document).on('click', '.save-note', function() {

  var thisId = $(this).attr('data-id');
  console.log($('#body-input').val());

  $.ajax({
    method: 'POST',
    url: '/' + thisId,
    data: {

      title: $('#title-input').val(),
      body: $('#body-input').val()
    }
  });
});

$(document).on('click', '#scrape-btn', function() {

  $.ajax({
    method: 'GET',
    url: '/scrape'
  });

});
