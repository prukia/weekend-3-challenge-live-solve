// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// spin up server
app.listen( 3042, function(){
  console.log( 'server up on 3042' );
}); // end server spin up

// home base`
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); //end home base

// calculate route
app.post( '/calculate', function( req, res ){
  console.log( 'calculate route hit:', req.body );
  switch( req.body.type ){
    case "+":
      var answer = Number( req.body.x ) + Number( req.body.y );
      break;
    case "-":
      answer = Number( req.body.x ) - Number( req.body.y );
      break;
    case "*":
      answer = Number( req.body.x ) * Number( req.body.y );
      break;
    case "/":
      answer = Number( req.body.x ) / Number( req.body.y );
      break;
    default:
      answer = 'go away...';
  } //end switch
  // wrap answer in an object
  var finalAnswer = {
    number: answer
  }; // end
  res.send( finalAnswer );
}); // end calculate route
