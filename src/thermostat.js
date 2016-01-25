function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype = {

  getCurrentTemperature: function() {
    return this.temperature;
  },

  up: function() {
    this.temperature += 1;
  },

  down: function() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  },

  isMinimumTemperature: function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  },

  isPowerSavingModeOn: function() {
    return this.powerSavingMode === true;
  },

  switchPowerSavingModeOff: function() {
    this.powerSavingMode = false;
  },

  switchPowerSavingModeOn: function() {
    this.powerSavingMode = true;
  }

};
