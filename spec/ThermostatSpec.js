'use strict';

describe('thermostat', function () {
    var thermostat;

    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function () {
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases in temerature with up', function () {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases in temperature with down', function() {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
    })

    it('has a minimum of ten degrees', function() {
        for (var i = 0; i < 11; i++) {
            thermostat.down();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('has power saving mode by default', function() {
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })

    it('can switch PSM off', function() {
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });
});