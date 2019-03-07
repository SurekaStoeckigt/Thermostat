'use strict';

function Thermostat(){
//using all CAPS for proerty name (constant)
this.MINIMUM_TEMPERATURE = 10;
this.temperature = 20;
this.powerSavingMode = true;

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  this.temperature += 1;
};

Thermostat.prototype.down = function(){
  //this is a guard condition to return this.temperature if temperatre === MINIMUM_TEMPERATURE, or descrease temp by 1degC
  if (this.isMinimumTemperature()){
    return this.temperature;
  }
  this.temperature -=1;
};

Thermostat.prototype.isMinimumTemperature = function(){
  //return true or false
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function(){
  //returning a boolean
  return this.powerSavingMode === true;
};
};
// things to notice:
// 1. temperature property is in constructor function, between {}
// 2. this keyword is used to make temperature an attribute of Thermostat
// 3. need to use getter method so that we cannot get access to a variable outside Thermostat object -- go to ThermostatSpec and use method instead of attribute
