'use strict';

function Thermostat(){
//using all CAPS for proerty name (constant)
this.MINIMUM_TEMPERATURE = 10;
this.DEFAULT_TEMPERATURE = 20;
this.temperature = this.DEFAULT_TEMPERATURE;
this.powerSavingMode = true;
this.MAX_LIMIT_PSM_ON = 25;
this.MAX_LIMIT_PSM_OFF= 32;

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()){
    return this.temperature;
  }
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

Thermostat.prototype.switchPowerSavingModeOff = function(){
  return this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function(){
  return this.powerSavingMode = true;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.isPowerSavingModeOn() === false) {

    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}
};
// things to notice:
// 1. temperature property is in constructor function, between {}
// 2. this keyword is used to make temperature an attribute of Thermostat
// 3. need to use getter method so that we cannot get access to a variable outside Thermostat object -- go to ThermostatSpec and use method instead of attribute
