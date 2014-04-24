/*
=======================
Application Entrypoint
=======================
*/

var coffee = require('coffee-script/register');
var tools = require('./tools');
var coftest = require('./c.coffee');

console.log(coftest.helloWorld());

var args = process.argv.slice(2);
var input = "undefined";
var output = "undefined";

if(args[0] == '-i'){
	input = args[1];
}else if(args[2] == '-i'){
	input = args[3];
}

if(args[2] == '-o'){
	output = args[3];
}else if(args[0] == '-o'){
	output = args[1];
}

tools.createFolder(input);
tools.createFolder(output);