"use strict"
let js = require('fs');
console.time("read File");
fs.readFile(process.argv[2],()=>{
	console.log("name");
	console.log("jiu");
	console.timeEnd("read File");
});
