const express = require('express')
const routers = require( __dirname + '/routers/datarouter')
const fs = require('fs')
const bodyparser = require('body-parser')

const app = express()

//Here we explicitly say that views is where the pug file
//is. If we don't do this, pug will look for a views file
//automaticaly. You do have to set the view engine to pug.
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use( bodyparser.urlencoded( { extended: true}))

//Here express.static loads the css and the jquery.
//app.use(express.static( __dirname + '/static'))

//Read Json 
var userdata = function (target) {
	return new Promise( function(resolve,reject) {
		fs.readFile(target, 'utf-8', function (err,data) {
			if (err) return reject(err)
			resolve (JSON.parse(data))
		})
	})
}

//This displays a Welcome and a searchbar
app.get('/', function (req,res) {
	res.render('index')
})

//With the /allusers url we display all the user in the users.json file
//it should appear under the searchbar.
app.get( '/allusers', function (req,res) {
	userdata( __dirname + '/users.json').then(function (parsedUserData) {
		res.render('allusers', {
		parsedUserData	
		})
	}).catch (console.log.bind(console))
})



app.use('/users', routers)

app.listen(3000, function( ) {
	console.log('Server Running')
})

