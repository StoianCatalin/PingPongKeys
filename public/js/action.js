/**
 * Created by Stoian Catalin on 09.08.2015.
 */
$(document).on('click', '.start', function() {
    var name = $('#name').val();
    $.post('/ajax/connect-with', {name: name}, function() {
        
    });
});