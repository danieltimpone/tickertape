var fs = require('fs');
var request = require('request');
var url = 'https://raw.githubusercontent.com/danieltimpone/tickertape/master/assets/companylist.json';
var companies = null;//JSON.parse(fs.readFileSync('assets/companylist.json', 'utf8'));
if(!companies) {
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            console.log(response.statusCode);
            companies = JSON.parse(body);
        }
    });
}

module.exports = {
    /**
    * Takes in single name of a company and
    * returns their corresponding
    * symbol
    */
    getSymbol : function(name) { 
        for(var key in companies) {
            if (companies[key]['Name'] == name) {
                return companies[key]['Symbol'];
            }
        } 
        
        
    },
    /**
    * Takes in single symbol for a company and
    * returns their corresponding
    * name
    */
    getName : function(symbol) {
        for(var key in companies) {
            if (companies[key]['Symbol'] == symbol) {
                return companies[key]['Name'];
            }
        }
    }
};