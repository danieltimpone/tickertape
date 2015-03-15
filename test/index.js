var fs = require('fs');
var companies = JSON.parse(fs.readFileSync('companylist.json', 'utf8'));

var should = require('chai').should(),
    tickertape = require('../index'),
    getSymbol = tickertape.getSymbol,
    getName = tickertape.getName;

describe('#getSymbol', function(){
    it('converts Advent Software, Inc. into ADVS', function(){
        getSymbol('Advent Software, Inc.').should.equal('ADVS');
    });
    it('converts Advaxis, Inc. into ADXS', function(){
        getSymbol('Advaxis, Inc.').should.equal('ADXS');
    });
    it('converts AngioDynamics, Inc. into ANGO', function(){
        getSymbol('AngioDynamics, Inc.').should.equal('ANGO');
    });
});

describe('#getName', function(){
    it('converts ADVS into Advent Software, Inc.', function(){
        getName('ADVS').should.equal('Advent Software, Inc.');
    });
    it('converts ADXS into Advaxis, Inc.', function(){
        getName('ADXS').should.equal('Advaxis, Inc.');
    });
    it('converts ANGO into AngioDynamics, Inc.', function(){
        getName('ANGO').should.equal('AngioDynamics, Inc.');
    });
});
