describe("Thermostat", function() {
  
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("by default", function() {
    
    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("changing temperature", function() {
    it("can increase", function() {
      thermostat.increaseTemperature(1);
      expect(thermostat.temperature).toEqual(21);
    });
  
    it("can decrease", function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toEqual(19);
    });

    it("has a minimum temperature of 10 degrees", function() {
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe("in power saving mode", function() {
    it("has a maximum temperature is 25 degrees", function() {
      thermostat.powerSavingMode = true;
      thermostat.increaseTemperature(16);
      expect(thermostat.temperature).toEqual(25);
    });
  });
});

// Thermostat starts at 20 degrees
// You can increase the temp with the up button
// You can decrease the temp with the down button
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red