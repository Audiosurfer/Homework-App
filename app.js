$(document).ready(function() {
    $('button').on('click', function() {
        var toDo = $(this).prev().val();
        $(this).next().append('<li>' + toDo + '</li>');
    })
    $('input[name=assignment]').on('keydown', function(enter) {
        if (enter.which == 13) {
            var toDo = $(this).val();
            $(this).next().next().append('<li>' + toDo + '</li>');
        }
    })
    $('.subjecttype').on('click','li', function() {
        $(this).toggleClass('strike');
    })
    $('.subjecttype').on('dblclick', 'li', function() {
        $(this).addClass('hide');
    })
      $('img').click(function() {
        prompt("What subject is this for?");
        var classname = $('prompt').val();
        var subject = "<div class='subjecttype'><h2>Subject - " + classname + "</h2><input type='text' name='assignment' placeholder=' Add assignment'/><button>Add</button><ol></ol></div>";
        $('header').after(subject);
    })
});