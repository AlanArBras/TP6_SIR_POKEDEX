/* jshint
laxcomma:true
, laxbreak:true
, unused : false
*/

'use strict';

window.onresize = function(){
    if ((window.innerHeight/window.innerWidth) > 0.62)
    {
        $('html').css('background-position', 'left bottom');
    }
    else {
        $('html').css('background-position', 'right bottom');
    }
};

var add_alert = function(){
    if (!$('.alert').length){
        $("<div class=\"alert alert-warning alert-dismissible\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><strong>Attention!</strong> Impossible de joindre pokeapi.co, vérifiez votre connexion internet.</div>").insertBefore(".frame");
    }
};
