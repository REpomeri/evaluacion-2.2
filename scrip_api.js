$(document).ready(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var economiaList = $('#economia-list');
        $.each(data, function(key, value) {
            if (typeof value === 'object' && value.valor) {
                economiaList.append('<li>' + key + ': ' + value.valor + ' ' + (value.unidad_medida || '') + '</li>');
            }
        });
    }).fail(function() {
        $('#economia-container').append('<p>No se pudieron cargar los datos económicos.</p>');
    });
});