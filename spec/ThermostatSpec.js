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

it('can increase its temperature', function(){
thermostat.up()
//assume thermostat increases temperature by 1degC at a time
expect(thermostat.getCurrentTemperature()).toEqual(21);
});

});
