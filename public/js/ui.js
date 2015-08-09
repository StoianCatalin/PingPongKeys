/**
 * Created by Stoian Catalin on 04.08.2015.
 */
$(document).ready(function() {
    $('.wrapper').height($(window).height());
    $('.circle').css('max-width', $('#oponent').height()+"px");
});
if ($('#name').val() != "") {
    $('.unv-start').addClass('start').removeClass('unv-start');
}
else {
    $('#name').addClass('unv-start').removeClass('start');
}
$(document).on('keyup', '#name', function() {
    if ($(this).val() != "") {
        $('.unv-start').addClass('start').removeClass('unv-start');
    }
    else {
        $('.start').addClass('unv-start').removeClass('start');
    }
});
$(document).on('click', '.start', function() {
    $('#name').attr('disabled', 'true');
    $.post('/ajax/connect-with', {name: $('#name').val()}, function(data) {
        alert(data);
        $(".start").html('Waiting for oponent...');
    });
});


var socket = io('http://localhost');
socket.on('wait-for-oponent', function (data) {

});