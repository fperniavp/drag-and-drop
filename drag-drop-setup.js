$(function(){
     var dropSection = $("[drop-section]").clone();

     $('#lhs').sortable({ 
        connectWith: '#rhs',
        items: '.drag-drop-element'
    }).on('sortable:receive', function(e, ui) {
        if($('#lhs').children().length){
            $('#lhs').find("[drop-section]").remove();
            if(!$('#rhs').find("[drop-section]").length){
                $('#rhs').append(dropSection);
            }
        }
    });

    $('#rhs').sortable({
        connectWith: '#lhs',
        items: '.drag-drop-element'
    }).on('sortable:receive', function(e, ui) {
       if(!$('#lhs').children().length){
            $('#lhs').append(dropSection);
        }else{
            $('#lhs').find("[drop-section]").remove();
            $("[drop-section]").remove();
            $('#rhs').append(dropSection);
        }
    });
});