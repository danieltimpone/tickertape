# Tickertape

Tickertape lets you convert company names into their corresponding stock ticker symbol and vice versa.

***Note: Module currently only supports NASDAQ companies***

## Installation

	`npm install tickertape`
## Usage

	```
	var tickertape = require('tickertape'),
	getSymbol = tickertape.getSymbol,
	getName = tickertape.getName;

	var companyName = 'Advaxis, Inc.`;
	var companySymbol = getSymbol(companyName);
	console.log(companyName+ ': ' + companySymbol);
	
	```
