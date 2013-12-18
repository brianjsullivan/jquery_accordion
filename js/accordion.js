/* +++++ BEGIN VARIABLE CONFIGURATION +++++ */
    var $videolocation = 'http://www.youtube.com/embed/YA1J-raGinQ';
    var $videowidth = 450;
    var $videoheight = 281;
    var $autoplay = $videolocation+'?autoplay=1';
    var $autoembedcode = '<iframe width="'+$videowidth+'" height="'+$videoheight+'" src="'+$autoplay+'" frameborder="0" allowfullscreen>Please view in iframe compatible browser</iframe>';
/* +++++ END VARIABLE CONFIGURATION +++++ */

$(document).ready(function () {

    $('.pane:eq(0)').show().addClass('active'); // force first pane to active state on load
    $('.active').prev('p.tab').addClass('activeparent'); // apply same status to first parent
    $('#pane3').css('height',$videoheight+'px'); // better sliding effect when leaving video pane

    $("p.tab").click(function () {
        if ($(this).next("div.pane").hasClass('active')) { // if pane is already active, no need to do anything
        } else {
            
            if($(this).next("div.pane").is('#pane3')){ // if video pane, load autoplay embed
               $('div#pane3').html($autoembedcode);
            }else if($('div#pane3').hasClass('active')){ // if just leaving video pane, clear autoplay embed
                $('div#pane3').html('');
            }
            
            $('.active').removeClass('active'); // clear panes
            $('.activeparent').removeClass('activeparent'); // clear tabs
            $(this).next("div.pane").addClass('active'); // apply active state to selected pane
            $(this).addClass('activeparent'); // apply active state to selected tab
            
            $(this).next("div.pane").slideToggle(300).siblings("div.pane").slideUp("fast"); // open selected pane and close all others
        }
    });
});