$( document ).ready( function(){
  var objectToSend = {
    x: null,
    y: null,
    type: null
  }; // end objectToSend

  $( '#clearButton').on( 'click', function(){
    console.log( 'in clearButton on click' );
    $( '#inputOutput').val( '' );
  }); // end clearButton on click

  $( '#equalsButton' ).on( 'click', function(){
    console.log( 'in equalsButton on click');
    objectToSend.y = $( '#inputOutput' ).val();
    console.log( 'sending:', objectToSend );
    //  ajax call to '/calculate' route
    // send objectToSend
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from server with:', response );
        // display the answer on the DOM
        $( '#inputOutput' ).val( response.number );
      }
    }); // end ajax
  }); // equalsButton on click

  $( '.numberButton' ).on( 'click', function(){
    var value = $( this ).data( 'value' );
    console.log( 'in numberButton on click:', value );
    var currentNumber = $( '#inputOutput').val();
    $( '#inputOutput').val( currentNumber + value );
  }); // end numberButton on click

  $( '.operatorButton' ).on( 'click', function(){
    var type = $( this ).data( 'type' );
    objectToSend.x = $( '#inputOutput' ).val();
    objectToSend.type = type;
    console.log( 'operatorButton on click:', objectToSend );
    $( '#inputOutput' ).val( '' );
  }); // end operatorButton on click
}); // end doc ready
