'use strict';

describe('Thermostat', function(){
var thermostat;

beforeEach(function(){
thermostat = new Thermostat
});

it('initializes with tempertaure of 20 degC', function(){
//use brackets at end to tell JS that we want to execute this function instead of returning function
expect(thermostat.getCurrentTemperature()).toEqual(20);
});

});
