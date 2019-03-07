'use strict';

describe('Thermostat', function(){
var thermostat;

beforeEach(function(){
thermostat = new Thermostat
});

it('initializes with tempertaure of 20 degC', function(){
expect(thermostat.temperature).toEqual(20);
});

});
