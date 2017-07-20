$(document).ready(function() {

    $.ajax({ url:
    "http://dockertutorial2-env.us-west-2.elasticbeanstalk.com/api/v1/getodds",
    dataType: 'json', success: function( data ) { var items = []; $.each( data,
    function( key, val ) { items.push( "<li id='" + key + "'>" + val + "</li>" ); });

    		  $( "<ul/>", { "class": "my-new-list", html: items.join( "" )
        }).appendTo( "span" ); }, error: function( data ) { console.log( 'ERROR: ',
    		  data ); } });



//closure for document.ready(function){
});
