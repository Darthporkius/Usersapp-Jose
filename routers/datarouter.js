//Read users.json
//add users to the json file
//route for displaying users
var parseddata;
const fs = require('fs')


const express = require('express')
const fs = require('fs')

const router = express.Router()

//add a user to the users.json 
router.get( '/add', function (req,res) {
	//here add extention
	res.render('adduser')
})

router.post( '/search', function (req,res) {
	fs.readFile( __dirname + '/users.json', 'utf-8', function (err, data) {
		if (err) return (err)
		parseddata = return (JSON.parse(data))
	})
	
	
	res.render('results')
})

module.exports = router