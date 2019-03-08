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

it('can decrease its temperature', function(){
thermostat.down()
expect(thermostat.getCurrentTemperature()).toEqual(19);
});

it('has a minimum of 10degC', function(){
// need to call thermostat down 11 times, so use a loop
for (var i = 0; i < 11; i ++) {
  thermostat.down();
}
expect(thermostat.getCurrentTemperature()).toEqual(10);
});

it('has PSM on by default', function(){
  expect(thermostat.isPowerSavingModeOn()).toBe(true);
});

it('can turn PSM off', function(){
//can turn off since it is on by default
  thermostat.switchPowerSavingModeOff();
  expect(thermostat.isPowerSavingModeOn()).toBe(false);
});

it('can turn PSM back on', function(){
  thermostat.switchPowerSavingModeOff();
  expect(thermostat.isPowerSavingModeOn()).toBe(false);
  thermostat.switchPowerSavingModeOn();
  expect(thermostat.isPowerSavingModeOn()).toBe(true);
});

it('when PSM is on, has a maximum of 25degC', function(){
  for (var i = 0; i < 6; i ++) {
  thermostat.up();
}
expect(thermostat.getCurrentTemperature()).toEqual(25);
});

it('when PSM is off, has maximum of 32degC', function(){
  thermostat.switchPowerSavingModeOff();
  for (var i = 0; i < 13; i ++) {
    thermostat.up();
  }
  expect(thermostat.getCurrentTemperature()).toEqual(32);
});

it('can be reset to the default temperature', function(){
  for (var i = 0; i < 6; i ++) {
    thermostat.up();
  }
  thermostat.resetTemperature();
  expect(thermostat.getCurrentTemperature()).toEqual(20);
});

});
