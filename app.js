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
     $('body').on('click','.deletebutton', function() {
        var confirmClose = confirm("Are you sure you would like to delete this subject?");
        if (confirmClose === true) {
            $(this).parent().parent().addClass('hide');
        }
    })
      $('img').click(function() {
        var classname = prompt("What subject is this for?");
        var subject = "<div class='subjecttype'><div class='subjectheader'><h2>Subject - " + classname + "</h2><button class='deletebutton' title='Delete subject'>X</button></div><input type='text' name='assignment' placeholder=' Add assignment'/><button title='Add assignment'>Add</button><ol></ol></div>"
        $('header').after(subject);
    })
});