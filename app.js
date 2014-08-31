$(document).ready(function() {
    $('body').on('click', 'button', function() {
        var toDo = $(this).prev().val();
        $(this).next().append('<li>' + toDo + '</li>');
    })
    $('body').on('keydown', 'input[name=assignment]', function(enter) {
        if (enter.which == 13) {
            var toDo = $(this).val();
            $(this).next().next().append('<li>' + toDo + '</li>');
        }
    })
    $('body').on('click','li', function() {
        $(this).toggleClass('strike');
    })
    $('body').on('dblclick', 'li', function() {
        $(this).addClass('hide');
    })
      $('img').click(function() {
        var classname = prompt("What subject is this for?");
        var subject = "<div class='subjecttype'><h2>Subject - " + classname + "</h2><input type='text' name='assignment' placeholder=' Add assignment'/><button>Add</button><ol></ol></div>";
        $('header').after(subject);
    })
});