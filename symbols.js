var Converter = require('csvtojson').core.Converter;
var fs = require('fs');

var csvfile =  "companylist.csv";

var fileStream = fs.createReadStream(csvfile);

var csvConverter = new Converter({constructResult:true});

csvConverter.on("end_parsed", function(jsonObj){
	console.log(jsonObj);
});

fileStream.pipe(csvConverter);
