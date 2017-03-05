//Read users.json
//add users to the json file
//route for displaying users

const express = require('express')
const fs = require('fs')
const bodyparser = require ('body-parser')

var searchresults;

const router = express.Router()

//add a user to the users.json 
router.get( '/add', function (req,res) {
	//here add extention
	res.render('adduser')
})

router.post( '/search', function (req,res) {
	fs.readFile( __dirname + '/users.json', 'utf-8', function (err, data) {
		if (err) return (err)
		var parseddata = JSON.parse(data)
		
		searchresults = []

		for (var i = 0; i < parseddata.length; i++) {
			if(
				( parseddata[i].firstname.tolowercase().indexOf(req.body.search.tolowercase() ) != -1 ) ||
				( parseddata[i].email.tolowercase().indexOf(req.body.search.tolowercase() ) != -1)
			) searchresults.push( parseddata[i] )
		}


	})

	if (process.en.debug ) console.log( searchresults )
	
	res.render('results', {
		results: searchresults
	})
})

module.exports = router