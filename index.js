var fs = require('fs');
var companies = JSON.parse(fs.readFileSync('assets/companylist.json', 'utf8'));

module.exports = {
    /**
    * Takes in single name of a company and
    * returns their corresponding
    * symbol
    */
    getSymbol : function(name) { 
        for ( var key in companies){
            if (companies[key]['Name'] == name){
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
        for ( var key in companies){
            if (companies[key]['Symbol'] == symbol){
                return companies[key]['Name'];
            }
        }
    }
};