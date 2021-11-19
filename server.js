const express = require( 'express' );
const app = express();

app.set( 'views', __dirname + '/views');
app.set( 'view engine', 'ejs' );

app.use(express.static(__dirname + "/static"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

let user = {};

app.get('/', function(request, response){
    response.render('form');
});

app.get('/info', function(request, response){
    response.render('info', {user});
});

app.post( '/request', function( request, response ){
    console.log( request.body );
    const userName = request.body.userName;
    const location = request.body.location
    const favorite = request.body.favorite;
    const comment = request.body.comment;


    if(comment === undefined){
        comment = " ";
    }

    user.userName = userName;
    user.location = location;
    user.favorite = favorite;
    user.comment = comment;

    response.redirect( '/info' );
});

app.listen( 8080, function(){
    console.log( 'This server is running in port 8080.' );
});