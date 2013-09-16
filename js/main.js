/************************************************************************
// For extensive details about creating a Populr theme, please visit
// http://developers.populr.me/theming
*/

$(document).on('pop-initialized', function(){
    $(".asset-type-documentgroup").parent().each(function(){
        $(this).addClass("jquery-tricky-bg");
    });
});