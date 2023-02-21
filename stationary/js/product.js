$(function () {
    $('select[name=tipsize]').change(function () {
        console.log($('select[name=tipsize] option:selected').text());
    });        
});