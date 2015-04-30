#!/usr/bin/env node

var request = require("request");

var args = process.argv.slice(2); 
var country = args[0];
var zipcode = args[1];

var apiUrlForCity = "http://api.zippopotam.us/"+country+"/"+zipcode;

getCityInformation();

function getCityInformation () {
	
	request(apiUrlForCity, function (error, response, body) {
		if (body == '{}'){
			throw new Error("Invalid City or Postal Code");
		}
	  	if (!error && response.statusCode == 200) {
	  		
	   		var resp = JSON.parse(body);
	   		console.log("City Name: ",resp.places[0]['place name']);
	   		console.log("Province/State:",resp.places[0]['state']);
	   		console.log("Latitude/Longitude:",resp.places[0]['latitude'],'/',resp.places[0]['longitude']);
	 	}
	});

};