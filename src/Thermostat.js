'use strict';

function Thermostat(){
this.temperature = 20;


Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

};
// things to notice:
// 1. temperature property is in constructor function, between {}
// 2. this keyword is used to make temperature an attribute of Thermostat
// 3. need to use getter method so that we cannot get access to a variable outside Thermostat object -- go to ThermostatSpec and use method instead of attribute
